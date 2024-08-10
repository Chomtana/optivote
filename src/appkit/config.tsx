'use client'

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { optimism } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = 'dd2a5d8744a5d72247899ef644bf8e1e'

export const metadata = {
  name: 'OptiVote',
  description: 'Retro Funding 5 voting for general developer',
  url: window.location.origin, // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [optimism] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  auth: {
    email: false,
    socials: ['github'],
    showWallets: false,
  }
})