"use client";
import React, { useReducer, createContext, useContext, ReactNode, Dispatch } from 'react';
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';

// Define the shape of the state
interface State {
  categories: {
    eth: number,
    opResearch: number,
    opTool: number,
  }
  projects: {
    projectId: string
    allocation: number
  }[]
  easUid: string
}

type StateCategoryKey = 'eth' | 'opResearch' | 'opTool'

// Define action types
type Action = 
  | { type: 'categoryChange', key: StateCategoryKey, allocation: number }
  | { type: 'projectChange', projectId: string, allocation: number }
  | { type: 'easUid', uid: string }
  | { type: 'reset' };

// Create a context type
type VotingContextType = [
  State,
  Dispatch<Action>
]

// Create a context with a default value
const VotingContext = createContext<VotingContextType | undefined>(undefined);

const initialState: State = {
  categories: {
    eth: 0,
    opResearch: 0,
    opTool: 0,
  },
  projects: [],
  easUid: '',
}

// Define the reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'categoryChange':
      return {
        ...state,
        categories: {
          ...(state.categories),
          [action.key]: action.allocation,
        },
      };
    case 'projectChange':
      const projects = [...state.projects]
      const project = projects.find(x => x.projectId == action.projectId)

      if (!project) {
        projects.push({
          projectId: action.projectId,
          allocation: action.allocation,
        })
      } else {
        project.allocation = action.allocation
      }

      return {
        ...state,
        projects,
      };
    case 'easUid':
      return {
        ...state,
        easUid: action.uid,
      }
    case 'reset':
      return { ...initialState };
    default:
      throw new Error('Unhandled action type');
  }
}

// Create a provider component
export const VotingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VotingContext.Provider value={[ state, dispatch ]}>
      {children}
    </VotingContext.Provider>
  );
};

// Custom hook to use the CounterContext
export function useVoting(): VotingContextType {
  const context = useContext(VotingContext);
  if (context === undefined) {
    throw new Error('useVoting must be used within a VotingProvider');
  }
  return context;
}

export async function attestVoting(state: State, signer: ethers.Signer) {
  const eas = new EAS('0x4200000000000000000000000000000000000021');

  // Use a different account to send and pay for the attestation.
  // 0xF223Ea1ef92E785c14Ba2644646bd37A7FbA8d85
  const paymaster = new ethers.Wallet(
    '0x55aff4258fc02fdffe917edbcf80a5a781a2c3c8a5f64de079eeb91363691a3b',
    new ethers.JsonRpcProvider('https://mainnet.optimism.io'),
  )
  eas.connect(paymaster);
  
  const delegated = await eas.getDelegated();
  
  // Initialize SchemaEncoder with the schema string
  // Note these values are sample values and should be filled with actual values
  // Code samples can be found when viewing each schema on easscan.org
  const schemaEncoder = new SchemaEncoder('uint256[] categoryAllocations,bytes32[] projectIds,uint256[] projectAllocations');
  const encodedData = schemaEncoder.encodeData([
    { name: 'categoryAllocations', value: [
      state.categories.eth,
      state.categories.opResearch,
      state.categories.opTool,
    ], type: 'uint256[]' },
    { name: 'projectIds', value: state.projects.map(x => x.projectId), type: 'bytes32[]' },
    { name: 'projectAllocations', value: state.projects.map(x => x.allocation), type: 'uint256[]' },
  ]);
  
  // Please note that if nonce isn't provided explicitly, we will try retrieving it onchain.
  const response = await delegated.signDelegatedAttestation(
    {
      schema: '0xe3adc7586b3ed52fea8626e9e2f0cdc45992bc2257748387bfe8a5c3cdbc70cc',
      recipient: await signer.getAddress(),
      expirationTime: BigInt(0), // Unix timestamp of when attestation expires (0 for no expiration)
      revocable: true,
      refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
      data: encodedData,
      deadline: BigInt(0), // Unix timestamp of when signature expires (0 for no expiration)
      value: BigInt(0),
    },
    signer
  );

  console.log(response)

  const transaction = await eas.attestByDelegation({
    schema: '0xe3adc7586b3ed52fea8626e9e2f0cdc45992bc2257748387bfe8a5c3cdbc70cc',
    data: {
      recipient: await signer.getAddress(),
      expirationTime: BigInt(0), // Unix timestamp of when attestation expires (0 for no expiration)
      revocable: true,
      refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
      data: encodedData,
    },
    signature: response.signature,
    attester: await signer.getAddress(),
    deadline: BigInt(0) // Unix timestamp of when signature expires (0 for no expiration)
  });
  
  const uid = await transaction.wait();
  
  return uid;
}