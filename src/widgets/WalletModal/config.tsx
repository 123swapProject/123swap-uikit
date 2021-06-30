import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import {Config, ConnectorNames, NetworkConfig, NetworkNames} from "./types";

export const connectors: Config[] = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: TrustWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: MathWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: TokenPocket,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: WalletConnect,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: BinanceChain,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: SafePalWallet,
        connectorId: ConnectorNames.Injected,
    },
];
export const networks: NetworkConfig[] = [
    {
        title: "BSC",
        icon: Metamask,
        networkId: NetworkNames.BSC,
        active: true,
        disabled: false,
    },
    {
        title: "ETH",
        icon: Metamask,
        networkId: NetworkNames.ETH,
        active: false,
        disabled: true,
    },
    {
        title: "NEO",
        icon: Metamask,
        networkId: NetworkNames.NEO,
        active: false,
        disabled: true,
    }, {
        title: "HECO",
        icon: Metamask,
        networkId: NetworkNames.HECO,
        active: false,
        disabled: true,
    },
]

export const connectorLocalStorageKey = "connectorId";
export const networkLocalStorageKey = "chainId";
