function getCodePrefix(code: string): string {
    const prefix = /([a-zA-Z]+)/.exec(code)

    if (!prefix) {
        return null
    }

    return prefix[1]
}

function getCodeIndex(code: string): number {
    const prefix = /([\d]+)/.exec(code)

    if (!prefix) {
        return null
    }

    return parseInt(prefix[1])
}

function fixCode(code: string): string {
    const prefix = getCodePrefix(code)
    const index = getCodeIndex(code)

    return index
        ? prefix + index.toString()
        : code
}

function changeCodeIndex(code: string, index: number): string {
    const prefix = /([a-zA-Z]+)/.exec(code)

    if (!prefix) {
        return code
    }

    return prefix[1] + index.toString()
}

export function splitCode(code: string): string[] {
    const parts = code.split('-')

    let prefix = ''

    return parts
        .map((x, i) => {
            const currentPrefix = getCodePrefix(x)

            if (currentPrefix) {
                prefix = currentPrefix
            }

            const n = parseInt(x)

            if (!isNaN(n)) {
                return prefix + x
                // return changeCodeIndex(parts[i - 1], n)
            }

            return x
        })
        .map(fixCode)
}