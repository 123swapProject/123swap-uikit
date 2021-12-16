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
            {
                label: "Docs",
                href: "https://docs.123swap.finance",
            },
            {
                label: "Contact us",
                href: "https://docs.123swap.finance/contact",
            },
            {
                label: "Blog",
                href: "https://medium.com/@123swap",
            },
        ],
    },
];

export const socials = [
    {
        label: "Linkedin",
        icon: "LinkedinIcon",
        href: "https://www.linkedin.com/company/123swap/",
    },
    {
        label: "Youtube",
        icon: "YoutubeIcon",
        href: "https://www.youtube.com/watch?v=3mOhzIAlgwQ",
    },
    {
        label: "Reddit",
        icon: "RedditIcon",
        href: "https://www.reddit.com/r/123swap/",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/123swapfinance",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/my123swap_chat",
    },
    {
        label: "Facebook",
        icon: "FacebookIcon",
        href: "https://www.facebook.com/123swapfinance/",
    },
    {
        label: "Discord",
        icon: "DiscordIcon",
        href: "https://discord.com/invite/arNbvrPgZx",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://medium.com/@123swap",
    },
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/123swapProject",
    },
];

export const MENU_HEIGHT = 64;
export const MENU_SOCIAL_HEIGHT = 190;
export const MENU_PRICE_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 180;
export const SIDEBAR_WIDTH_REDUCED = 56;
