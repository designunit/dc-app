import { Form, Input } from 'antd'
import * as React from 'react'
import { getHelpFromMeta } from './lib'

export const FInput = (props: any) => {
    const { wrapper = true, input, label, type, prefix, ...other } = props
    const m = getHelpFromMeta(props.meta)

    if (wrapper) {
        return (
            <Form.Item
                label={label}
                hasFeedback={true}
                help={m.help}
                validateStatus={m.validateStatus}
                {...other}
            >
                <Input
                    {...input}
                    prefix={prefix}
                    placeholder={props.placeholder}
                    type={type}
                />
            </Form.Item>
        )
    }

    return (
        <Input
            {...input}
            {...other}
            placeholder={props.placeholder}
            type={type}
        />
    )
}