import axios from 'axios'
import { ICode, ICategory } from './types'
import { splitCode } from './lib/code';

const BASE_URL = 'http://localhost:5000'

function createCode(data: object): ICode {
    return {
        id: data['code'],
        alias: data['alias'],
        code: splitCode(data['code']),
        keywords: new Set(data['tags']),
        title: data['title'],
    }
}

export function url(path: string): string {
    return BASE_URL + path
}

export async function getCode(codeId: string): Promise<ICode> {
    const all_res = await getAllCodes()

    return all_res.find(x => x.id === codeId)
}

export async function getAllCodes(): Promise<ICode[]> {
    const res = await axios.get(url('/items'))

    return res.data['data'].map(createCode)
}

export async function getTagChildren(tag: string): Promise<string[]> {
    if (tag === 'EQP') {
        return ['POP', 'MAT']
    }
    const res = await axios.get(url(`/tags/${tag}/children`))

    return res.data['data']
}

export async function getAllTags(): Promise<string[]> {
    const res = await axios.get(url('/search/tags'))

    return res.data['data']
}

export async function getCategories(): Promise<ICategory[]> {
    const tags = [
        {
            "prefix": "BRD",
            "name": "Borders",
        },
        {
            "prefix": "LGH",
            "name": "Lightening",
        },
        {
            "prefix": "PAV",
            "name": "Paving",
        },
        {
            "prefix": "EQP",
            "name": "Equipment",
        },
        {
            "prefix": "FNC",
            "name": "Fence",
        },
        {
            "prefix": "GRN",
            "name": "Green",
        },
    ]

    const categories: ICategory[] = []

    const names = {
        MAT: 'Material',
        COL: 'Color',
        PAT: 'Pattern',
        PRD: 'Production',
        BST: 'Base Type',
    }

    let counter = 0
    for (const tag of tags) {
        const children = await getTagChildren(tag.prefix)
        const codes: ICode[] = children.map(x => createCode({
            title: x in names ? names[x] : x,
            code: x,
            tags: [],
        }))
        categories.push({
            ...tag,
            id: counter,
            counter: 1,
            priority: 1,
            childrenTags: codes,
        })

        counter ++
    }

    return categories
}