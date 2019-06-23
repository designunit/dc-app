import { Alert, Button, Form, Icon } from 'antd'
import * as React from 'react'
// import { Trans } from 'react-i18next'
import { Field, InjectedFormProps } from 'redux-form'
// import { ILoginInfo } from 'src/application/types'
// import F from 'src/components/F'
// import { t } from 'src/translation'

import {FInput as Input} from './Input'

// import './styles.css'

export interface IProps {
    loading: boolean
}

export default class FormLogin extends React.PureComponent<InjectedFormProps<any, IProps> & IProps> {
    public render() {
        // const error = this.props.error
        // const loading: any = !this.props.loading ? false : {
        //     delay: 250,
        // }

        return (
            <Form
                onSubmit={this.props.handleSubmit}
                layout={'vertical'}
                // className='login-form'
            >
                {/* {!error ? null : (
                    <F.Field>
                        <Alert
                            message={t(error)}
                            type='error'
                            showIcon={true}
                        />
                    </F.Field>
                )} */}

                <Field
                    name='username'
                    component={Input}
                    label='Username'
                    // placeholder={t('field-email')}
                    prefix={(
                        <Icon
                            type='user'
                            style={{
                                color: 'rgba(0,0,0,.25)',
                            }}
                        />
                    )}
                />

                <Field
                    name='password'
                    component={Input}
                    label='Password'
                    // placeholder={t('field-password')}
                    type='password'
                    prefix={(
                        <Icon
                            type='lock'
                            style={{
                                color: 'rgba(0,0,0,.25)',
                            }}
                        />
                    )}
                />

                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                        // loading={loading}
                    >
                        Login
                        {/* <Trans i18nKey={'Login'} /> */}
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}