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
        networkId: "BNB",
        active: true,
        disabled: false,
        wallets : [
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
]
    },
    {
        title: "ETH",
        icon: Metamask,
        networkId: "ETH",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            },
        ]
    },
    {
        title: "POLY",
        icon: Metamask,
        networkId: "MATIC",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            },
        ]
    }, {
        title: "AVAL",
        icon: Metamask,
        networkId: "AVAX",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            },
        ]
    },
    {
        title: "FTM",
        icon: Metamask,
        networkId: "FTM",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            },
        ]
    },
    {
        title: "HARMONY",
        icon: Metamask,
        networkId: "ONE",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            }
        ]
    },
    {
        title: "MOON",
        icon: Metamask,
        networkId: "MOVR",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            }
        ]
    },
    {
        title: "HECO",
        icon: Metamask,
        networkId: "HT",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            }
        ]
    },
    {
        title: "OKEX",
        icon: Metamask,
        networkId: "OKT",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            }
        ]
    },
    {
        title: "CRONOS",
        icon: Metamask,
        networkId: "CRO",
        active: false,
        disabled: false,
        wallets : [
            {
                title: "Metamask",
                icon: Metamask,
                connectorId: ConnectorNames.Injected,
            },
            {
                title: "WalletConnect",
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect,
            }
        ]
    },
]

export const connectorLocalStorageKey = "connectorId";
export const networkLocalStorageKey = "networkId";
