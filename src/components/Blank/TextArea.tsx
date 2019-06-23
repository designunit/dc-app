import { Form, Input } from 'antd'
import * as React from 'react'
import { getHelpFromMeta } from './lib'

export const FTextArea = (props: any) => {
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
                <Input.TextArea
                    {...input}
                    {...other}
                    prefix={prefix}
                    placeholder={props.placeholder}
                    type={type}
                />
            </Form.Item>
        )
    }

    return (
        <Input.TextArea
            {...input}
            {...other}
            placeholder={props.placeholder}
            type={type}
        />
    )
}