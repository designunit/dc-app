const codeTagPattern = /^([a-zA-Z]+)(\d+)?/

export function getTagPrefix(code: string): string {
    const prefix = codeTagPattern.exec(code)

    if (!prefix) {
        return null
    }

    return prefix[1]
}

export function getCodeIndex(code: string): number {
    const prefix = /([\d]+)/.exec(code)

    if (!prefix) {
        return null
    }

    return parseInt(prefix[1])
}

function fixCode(code: string): string {
    const prefix = getTagPrefix(code)
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
    const parts = getCodeParts(code)

    let prefix = ''

    return parts
        .map((x, i) => {
            const currentPrefix = getTagPrefix(x)

            if (currentPrefix) {
                prefix = currentPrefix
            }

            const n = parseInt(x)

            if (!isNaN(n)) {
                return prefix + x
            }

            return x
        })
        .map(fixCode)
}

/**
 * 'PAV-MAT-COL' -> ['PAV', 'MAT', 'COL']
 */
export function getCodeParts(code: string): string[] {
    return code.split('-')
}
