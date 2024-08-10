"use client";
import React, { useReducer, createContext, useContext, ReactNode, Dispatch } from 'react';

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
}

type StateCategoryKey = 'eth' | 'opResearch' | 'opTool'

// Define action types
type Action = 
  | { type: 'categoryChange', key: StateCategoryKey, allocation: number }
  | { type: 'projectChange', projectId: string, allocation: number }
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