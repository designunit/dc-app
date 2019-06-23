import { ICode } from "./types";
import { splitCode } from "./lib";

function isSubsetOf<T>(set: Set<T>, subset: Set<T>): boolean {
    const union = new Set([...set, ...subset])

    return union.size === set.size
}

export function filterItems(items: ICode[], selectedTags: string[]): ICode[]{
    const query = new Set(selectedTags)

    return items.filter(x => {
        // const tags = new Set(splitCode(x.code))
        const tags = new Set(x.tags)

        // return true
        return isSubsetOf(tags, query)
    })
}