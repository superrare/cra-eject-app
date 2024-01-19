import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import WebFontLoader from 'webfontloader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  connectorsForWallets,
  lightTheme
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import {
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  metaMaskWallet,
  ledgerWallet,
  trustWallet,
  omniWallet,
  imTokenWallet,
  braveWallet,
  safeWallet
} from '@rainbow-me/rainbowkit/wallets'

import configureStore from './store/configureStore'
import Routes from './routes'
import App from './containers/App'

import './css/index.css'
import { SRDisclaimer } from 'components/SRDisclaimer'
import { ALCHEMY_API_KEY, WC_PROJECT_ID } from 'constants/environment'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

// React query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
})

// Initialize store
const store = configureStore()

// walletconnect project ID
const projectId = WC_PROJECT_ID

//rainbow config
const { chains, provider } = configureChains(
  [mainnet, sepolia],
  [alchemyProvider({ apiKey: ALCHEMY_API_KEY })]
)
// eslint-disable-next-line no-debugger
const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      coinbaseWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains })
    ]
  },
  {
    groupName: 'More',
    wallets: [
      safeWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      braveWallet({ projectId, chains }),
      omniWallet({ projectId, chains }),
      imTokenWallet({ projectId, chains })
    ]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  provider
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          theme={lightTheme({ borderRadius: 'none' })}
          appInfo={{
            appName: 'SuperRare',
            disclaimer: SRDisclaimer
          }}
          chains={chains}
        >
          <BrowserRouter>
            <App>
              <Routes />
            </App>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  </QueryClientProvider>
)
