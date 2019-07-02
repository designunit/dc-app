import React from 'react'
import { Tag } from 'antd'

const { CheckableTag } = Tag

export interface ITag<T> {
    name: string
    id: string
    value: T
    checked: boolean
}

export interface ITagListProps<T> {
    items: ITag<T>[]
    onChange(tag: ITag<T>): void
    reverse: boolean
}

export function TagList<T>(props: ITagListProps<T>) {
    return (
        <div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: ${props.reverse ? 'row-reverse' : 'row'};
                    flex-wrap: wrap;
                }
            `}</style>
            
            {props.items.map(tag => (
                <CheckableTag
                    key={tag.id}
                    checked={tag.checked}
                    onChange={checked => props.onChange({
                        ...tag,
                        checked,
                    })}
                >
                    {tag.name}
                </CheckableTag>
            ))}
        </div>
    )
}

export default TagList
