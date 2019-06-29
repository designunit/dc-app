import axios from 'axios'
import { ICode } from './types';
import { splitCode } from './lib';

const BASE_URL = 'http://localhost:5000'

export function url(path: string): string {
    return BASE_URL + path
}

export async function getCode(code: string): Promise<ICode> {
    const all_res = await getAllCodes()

    return all_res.find(x => x.code === code)
}

export async function getAllCodes(): Promise<ICode[]> {
    const res = await axios.get(url('/items'))

    return res.data['data']
}

export async function getTagChildren(tag: string): Promise<string[]> {
    const res = await axios.get(url(`/tags/${tag}/children`))

    return res.data['data']
}

export async function getAllTags(): Promise<string[]> {
    const res = await axios.get(url('/search/tags'))

    return res.data['data']

    const items = await getAllCodes()
    const codes = items
        .map(x => x.code)
        .map(splitCode)
        .flat()

    return Array
        .from(new Set(codes))
        .sort()
}
