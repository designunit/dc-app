import { Button, Form, Icon } from 'antd'
import * as React from 'react'
// import { Trans } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'
// import { ILoginInfo } from 'src/application/types'
// import F from 'src/components/F'
// import { t } from 'src/translation'

import { FInput as Input } from './Input'
import { FTextArea as TextArea } from './TextArea'

// import './styles.css'

export interface IField {
    input: string,
    name: string,
    label: string,
    options?: any,
}

export interface IProps {
    loading: boolean
    fields: IField[]
}

const getComponent = (input: string) => {
    if (input === 'textarea') {
        return TextArea
    }

    return Input
}

export default class Blank extends React.PureComponent<InjectedFormProps<any, IProps> & IProps> {
    public render() {
        return (
            <Form
                onSubmit={this.props.handleSubmit}
                layout={'vertical'}
            >
                {this.props.fields.map((f, i) => (
                    <Field
                        key={i}
                        name={f.name}
                        component={getComponent(f.input)}
                        label={f.label}
                        {...f.options}
                    // placeholder={t('field-email')}
                    // prefix={(
                    //     <Icon
                    //         type='user'
                    //         style={{
                    //             color: 'rgba(0,0,0,.25)',
                    //         }}
                    //     />
                    // )}
                    />
                ))}

                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                        // loading={loading}
                    >
                        Save
                        {/* <Trans i18nKey={'Login'} /> */}
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}