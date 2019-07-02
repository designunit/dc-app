import React from 'react'
import { ICode } from '../../app/types'
import TagList, { ITag } from '../TagList'

export interface ICodeTagListProps {
    items: ICode[]
    selection: string[]
    onChange(value: ICode, checked: boolean): void
}

const CodeTagList: React.FC<ICodeTagListProps> = props => {
    const items: ITag<ICode>[] = props.items.map(x => ({
        id: x.id,
        name: x.title,
        value: x,
        checked: props.selection.includes(x.id),
    }))

    return (
        <TagList<ICode>
            items={items}
            onChange={tag => props.onChange(tag.value, tag.checked)}
            reverse={false}
        />
    )
}

export default CodeTagList
