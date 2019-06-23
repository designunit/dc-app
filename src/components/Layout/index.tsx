import React, { useState } from 'react'
import Link from 'next/link'
import { Layout, Button } from 'antd'

import 'antd/dist/antd.less'
import '../../style.css'
import './style.css'
import CategoryList from '../CategoryList';
import { ICategory } from 'src/app/types';
import Tags from '../Tags';
import { splitCode } from '../../app/lib';

const Logo = () => (
    <div>
        <style jsx>{`
            div {
                width: 100%;
            }

            span { 
                display: flex;

                border: 7px solid rgb(50, 50, 50);

                color: rgb(50, 50, 50);
                font-family: sans-serif;
                font-weight: bold;
                font-size: 1.75em;

                margin: 10px;
                padding: 10px 15px;
            }

            strong {
                max-width: 250px;
            }
        `}
        </style>

        <Link href="/">
            <a>
                <span>
                    <strong>DESIGN::CODE</strong>
                </span>
            </a>
        </Link>
    </div>
)

const {
    Header, Footer, Sider, Content,
} = Layout

const categories: ICategory[] = [
    {
        "id": 2,
        "prefix": "BRD",
        "name": "Borders",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 3,
        "prefix": "LGH",
        "name": "Lightening",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 4,
        "prefix": "PAV",
        "name": "Paving",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 6,
        "prefix": "EQP",
        "name": "Equipment",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 7,
        "prefix": "FNC",
        "name": "Fence",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 8,
        "prefix": "GRN",
        "name": "Green",
        "counter": 1,
        "priority": 1,
    },
]

const categories2: ICategory[] = [
    {
        "id": 1,
        "prefix": "MAT",
        "name": "Materials",
        "counter": 2,
        "priority": 2,
    },
    {
        "id": 5,
        "prefix": "PTR",
        "name": "Pattern",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 6,
        "prefix": "PRT",
        "name": "Production type",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 7,
        "prefix": "COL",
        "name": "Color",
        "counter": 1,
        "priority": 1,
    },
    {
        "id": 8,
        "prefix": "BST",
        "name": "Base type",
        "counter": 1,
        "priority": 1,
    },
]

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
                    <CategoryList
                        categories={categories}
                        showAddButton={false}
                    />
                    <CategoryList
                        categories={categories2}
                        showAddButton={true}
                    />
                </div>
            </Sider>

            {props.children}
        </Layout>
    )
}
