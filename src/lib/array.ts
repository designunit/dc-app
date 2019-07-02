export function arraySplit<T>(items: T[], filter: (item: T) => boolean): [T[], T[]] {
    return items.reduce((acc, item) => {
        const i = filter(item) ? 0 : 1
        acc[i].push(item)
        return acc
    }, [[], []])
}

export function arrayPrune<T>(items: T[], item: T): T[]{
    return items.filter(x => x !== item)
}