import * as React from 'react'
// import { Trans } from 'react-i18next'
import { InjectedFormProps } from 'redux-form'
// import { ILoginInfo } from 'src/application/types'
// import F from 'src/components/F'
// import { t } from 'src/translation'

import Blank from '../Blank'

// import './styles.css'

export interface IProps {
    loading: boolean
}

export default class FormCode extends React.PureComponent<InjectedFormProps<any, IProps> & IProps> {
    public render() {
        return (
            <Blank
                onSubmit={this.props.handleSubmit}
                layout={'vertical'}
                fields={[
                    {
                        input: 'input',
                        name: 'title',
                        label: 'Title',
                    },
                    {
                        input: 'input',
                        name: 'code',
                        label: 'Code',
                    },
                    {
                        input: 'textarea',
                        name: 'description',
                        label: 'Description',
                        options: {
                            rows: 4,
                        }
                    },
                    {
                        input: 'textarea',
                        name: 'comment',
                        label: 'Comment',
                    },
                ]}
            />
        )
    }
}