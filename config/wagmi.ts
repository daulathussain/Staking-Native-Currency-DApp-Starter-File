import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { polygon, sepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Native Currency Staking DApp',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [polygon],
  ssr: true,
})
