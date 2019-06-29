import React from 'react'
import { Layout } from 'antd'

import 'antd/dist/antd.less'
import '../../style.css'
import './style.css'
import { ICategory } from 'src/app/types'
import Logo from './Logo'

const { Sider } = Layout

export interface IProps {
    mainCategories: ICategory[]
    additionalCategories: ICategory[]
    sideComponent: React.ReactNode
}

export default (props) => {
    return (
        <Layout
            className={'main-layout'}
        >
            <Sider
                width={'20%'}
            >
                <Logo />

                <div>
                    {props.sideComponent}
                </div>
            </Sider>

            {props.children}
        </Layout>
    )
}
