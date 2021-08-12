import { PlatformType } from "@wault/typings";

const list: {
    [key: string]: PlatformType;
} = {
    "discord.com": {
        name: "Discord",
        color: "#7289DA",
        icon: "discord.svg",
        categories: ["communication", "social"],
    },
    "google.com": {
        name: "Google",
        color: "#fff",
        icon: "google.svg",
        categories: ["communication"],
    },
    "netflix.com": {
        name: "Netflix",
        color: "#141414",
        icon: "netflix.svg",
        categories: ["entertainment"],
    },
    "github.com": {
        name: "Github",
        color: "#000000",
        icon: "github.svg",
        categories: ["work"],
    },
    "twitter.com": {
        name: "Twitter",
        color: "#1D9BF0",
        icon: "twitter.svg",
        categories: ["social"],
    },
    "epicgames.com": {
        name: "Epic Games",
        color: "#37322f",
        icon: "epic-games.svg",
        categories: ["games"],
    },
    "spotify.com": {
        name: "Spotify",
        color: "#1DB954",
        icon: "spotify.svg",
        categories: ["entertainment"],
    },
    "twitch.tv": {
        name: "Twitch",
        color: "#9146FF",
        icon: "twitch.svg",
        categories: ["entertainment"]
    },
    "reddit.com": {
        name: "Reddit",
        color: "#FF4500",
        categories: ["social", "entertainment"],
        icon: "reddit.svg",
    },
    "steamcommunity.com": {
        name: "Steam",
        color: "#fff",
        icon: "steam.svg",
        categories: ["games", "social"]
    },
    "snapchat.com": {
        name: "Snapchat",
        color: "#FFFC00",
        categories: ["social", "communication"],
        icon: "snapchat.svg",
    },
    "digitalocean.com": {
        name: "DigitalOcean",
        categories: ["work"],
        color: "#0080FF",
        icon: "digital-ocean.svg",
    },
    "apple.com": {
        name: "Apple",
        categories: [],
        color: "#fff",
        icon: "apple.svg",
    },
    "microsoft.com": {
        name: "Microsoft",
        categories: ["work"],
        color: "#fff",
        icon: "microsoft.svg",
    },
    "lastpass.com": {
        name: "LastPass",
        categories: ["work"],
        color: "#D32D27",
    },
    "slack.com": {
        name: "Slack",
        categories: ["work"],
        color: "#ffffff",
        icon: "slack.svg",
    },
    "riotgames.com": {
        name: "Riot Games",
        categories: ["games"],
        color: "#d2373a",
        icon: "riot-games.svg",
    },
};

export default list;