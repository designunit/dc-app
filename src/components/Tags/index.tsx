import React from 'react'
import { Select } from 'antd'
import { splitCode } from '../../app/lib'

const Option = Select.Option;

interface ITag<T> {
    title: string
    value: T
}

interface IProps<T> {
    disabled?: boolean
    // items: ITag<string>[]
    items: string[]
    value: string[]
    onChange?: (value: T, option: React.ReactElement<any> | React.ReactElement<any>[]) => void
}

export default (props: IProps<string[]>) => (
    <Select
        disabled={props.disabled}
        // size={'small'}
        // mode="tags"
        mode={'multiple'}
        style={{
            width: '100%'
        }}
        placeholder={'Search'}
        onChange={props.onChange}
        value={props.value}
        // disabled={true}
    >
        {props.items.map((x, i) => (
            <Option
                key={i}
                value={x}
            >
                {x}
            </Option>
        ))}
    </Select>
)

export function createTags(value: string): string[] {
    return splitCode(value)
    //     .map(x => ({
    //     title: x,
    //     value: x,
    // }))
}