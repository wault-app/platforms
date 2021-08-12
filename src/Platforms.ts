import { PlatformType } from "@wault/typings";
import aliases from "./aliases";
import list from "./list";

export type PlatformTypeWithDomain = PlatformType & {
    domain: string;
};

export default class Platforms {
    public static get(hostname: string): PlatformType {
        return list[hostname] || list[aliases[hostname]] || {
            name: hostname,
            categories: [],
        };
    }

    public static getAll(): PlatformTypeWithDomain[] {
        return Object.keys(list).map((domain) => ({
            domain,
            ...Platforms.get(domain),        
        }));
    }
}