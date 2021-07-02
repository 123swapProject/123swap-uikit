import {LinkStatus} from "./types";

export const status = {
    LIVE: <LinkStatus>{
        text: "LIVE",
        color: "failure",
    },
    SOON: <LinkStatus>{
        text: "SOON",
        color: "warning",
    },
    NEW: <LinkStatus>{
        text: "NEW",
        color: "success",
    },
};

export const links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "https://exchange.123swap.finance",
    },
    {
        label: "123swap",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.123swap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.123swap.finance/#/pool",
            },
        ],
    },
    {
        label: "123yield",
        icon: "PoolIcon",
        items: [
            {
                label: "Farms",
                icon: "FarmIcon",
                href: "/farms",
                status: status.LIVE,
            },
            {
                label: "Pools",
                icon: "PoolIcon",
                href: "/syrup",
            },
        ]
    },

    {
        label: "123bridge",
        icon: "BridgeIcon",
        href: "#",
    },
    {
        label: "123nft",
        icon: "NftIcon",
        href: "#",
    },
    {
        label: "123lend&borrow",
        icon: "BorrowIcon",
        href: "#",
    },
    {
        label: "123gov",
        icon: "GovIcon",
        href: "#",
    },

    // {
    //   label: "Lottery",
    //   icon: "TicketIcon",
    //   href: "/lottery",
    // },
    // {
    //   label: "Team Battle",
    //   icon: "TeamBattleIcon",
    //   href: "/competition",
    //   status: status.SOON,
    // },
    // {
    //   label: "Profile & Teams",
    //   icon: "GroupsIcon",
    //   items: [
    //     {
    //       label: "Leaderboard",
    //       href: "/teams",
    //       status: status.NEW,
    //     },
    //     {
    //       label: "YourProfile",
    //       href: "/",
    //     },
    //   ],
    //   calloutClass: "rainbow",
    // },
    // {
    //   label: "Info",
    //   icon: "InfoIcon",
    //   items: [
    //     {
    //       label: "Overview",
    //       href: "https://pancakeswap.info",
    //     },
    //     {
    //       label: "Tokens",
    //       href: "https://pancakeswap.info/tokens",
    //     },
    //     {
    //       label: "Pairs",
    //       href: "https://pancakeswap.info/pairs",
    //     },
    //     {
    //       label: "Accounts",
    //       href: "https://pancakeswap.info/accounts",
    //     },
    //   ],
    // },
    // {
    //   label: "IFO",
    //   icon: "IfoIcon",
    //   items: [
    //     {
    //       label: "Next",
    //       href: "/ifo",
    //     },
    //     {
    //       label: "History",
    //       href: "/ifo/history",
    //     },
    //   ],
    // },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/123swapProject",
            },
            // {
            //   label: "Docs",
            //   href: "https://docs.123swap.finance",
            // },
            // {
            //   label: "Contact us",
            //   href: "https://docs.123swap.finance",
            // },
            // {
            //   label: "Blog",
            //   href: "https://pancakeswap.medium.com",
            // },
        ],
    },
];

export const socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/123swap",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/123swap",
    },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
