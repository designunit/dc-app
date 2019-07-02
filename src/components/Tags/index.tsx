import React from 'react'
import { Select } from 'antd'

const Option = Select.Option;

interface ITag<T> {
    title: string
    value: T
}

interface IProps<T> {
    disabled?: boolean
    items: string[]
    value: string[]
    allowNew: boolean   
    onChange?: (value: T, option: React.ReactElement<any> | React.ReactElement<any>[]) => void
}

export default (props: IProps<string[]>) => (
    <Select
        disabled={props.disabled}
        mode={props.allowNew ? 'tags' : 'multiple'}
        style={{
            width: '100%'
        }}
        placeholder={'Search'}
        onChange={props.onChange}
        value={props.value}
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
