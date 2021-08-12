import list from "./list";

const aliases: { [key: string]: keyof typeof list } = {
    "discordapp.com": "discord.com", 
};

export default aliases;