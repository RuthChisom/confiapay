import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { http } from 'viem';

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Configure chains & providers
// const { chains, publicClient } = configureChains(
//   [sepolia], // use Lisk Sepolia later
//   [publicProvider()]
// );

// // Wallet connectors
// const { connectors } = getDefaultWallets({
//   appName: "ConfiaPay",
//   projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // get free at cloud.walletconnect.com
//   chains,
// });

// // Create wagmi config
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

// Create QueryClient (wagmi v2 needs react-query)
const queryClient = new QueryClient();

// Configure wagmi
// const config = createConfig({
//   chains: [sepolia],
//   transports: {
//     [sepolia.id]: http(), // uses default public RPC
//   },
// });

// // Get default wallets
// const { wallets } = getDefaultWallets({
//   appName: "ConfiaPay",
//   projectId: "cde6b941ba0c104a1111b579588c7e7e", // get one at cloud.walletconnect.com
//   chains: [sepolia],
// });

const config = getDefaultConfig({
  appName: 'ConfiaPay',
  projectId: 'cde6b941ba0c104a1111b579588c7e7e', // get one at cloud.walletconnect.com
  chains: [sepolia], 
  transports: {
    [sepolia.id]: http(), 
  },
});

// Render app
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WagmiConfig config={wagmiConfig}>
//       <RainbowKitProvider chains={chains}>
//         <App />
//       </RainbowKitProvider>
//     </WagmiConfig>
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{/* Wallets + chains auto-linked */}
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
