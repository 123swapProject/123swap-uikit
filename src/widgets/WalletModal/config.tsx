import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import BinanceNetwork from "./icons/BinanceNetwork";
import EtheriumNetwork from "./icons/EtheriumNetwork";
import PolyNetwork from "./icons/PolyNetwork";
import AvalNetwork from "./icons/AvalNetwork";
import FtmNetwork from "./icons/FtmNetwork";
import HarmonyNetwork from "./icons/HarmonyNetwork";
import MoonNetwork from "./icons/MoonNetwork";
import HecoNetwork from "./icons/HecoNetwork";
import OkexNetwork from "./icons/OkexNetwork";
import CronosNetwork from "./icons/CronosNetwork";
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
        icon: BinanceNetwork,
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
        icon: EtheriumNetwork,
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
        icon: PolyNetwork,
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
        icon: AvalNetwork,
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
        icon: FtmNetwork,
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
        icon: HarmonyNetwork,
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
        icon: MoonNetwork,
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
        icon: HecoNetwork,
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
        icon: OkexNetwork,
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
        icon: CronosNetwork,
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
    {
        title: "ARBITRUM",
        icon: Metamask,
        networkId: "ARBITRUM",
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
        title: "XDAI",
        icon: Metamask,
        networkId: "XDAI",
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
        title: "CELO",
        icon: Metamask,
        networkId: "CELO",
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
        title: "PALM",
        icon: Metamask,
        networkId: "PALM",
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
        title: "TELOS",
        icon: Metamask,
        networkId: "TELOS",
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
