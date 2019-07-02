import { ICode } from '../types'
import { isSubsetOf } from '../../lib/array'

export function filterCodesByKeywords(items: ICode[], keywords: Set<string>): ICode[]{
    return items.filter(x => isSubsetOf(new Set(x.keywords), keywords))
}
