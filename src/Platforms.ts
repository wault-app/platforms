import { PlatformType } from "@wault/typings";
import aliases from "./aliases";
import list from "./list";

export default class Platforms {
    public static get(hostname: string): PlatformType {
        return list[hostname] || list[aliases[hostname]] || {
            name: hostname,
            categories: [],
        };
    }

    public static getAll(): PlatformType[] {
        return Object.keys(list).map((platform) => (
            Platforms.get(platform)
        ));
    }
}