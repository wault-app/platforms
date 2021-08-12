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
}