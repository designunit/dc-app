import React, { useState } from 'react'
import CodeTable from '../src/components/CodeTable'
import { ICode, ICategory } from '../src/app/types'
import { getAllCodes, getAllTags } from '../src/app/api'
import { Layout } from 'antd'
import Tags from '../src/components/Tags'
import AppLayout from '../src/components/AppLayout'
import CategoryList from '../src/components/CategoryList'
import { filterItems } from '../src/app/search'

const { Header, Content } = Layout

const categories: ICategory[] = [
    {
        "id": 2,
        "prefix": "BRD",
        "name": "Borders",
        "counter": 1,
        "priority": 1,
        "childrenTags": ["MAT"]
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

interface IProps {
    codeItems: ICode[]
    allTags: string[]
}

const Index = (props: IProps) => {
    const [selectedTags, setSelectedTags] = useState([])

    const matchedCodeItems = filterItems(props.codeItems, selectedTags)

    return (
        <AppLayout
            sideComponent={(
                <CategoryList
                    items={categories}
                />
            )}
        >
            <Layout>
                <Header
                    style={{
                        padding: '0 10px',
                    }}
                >
                    <style jsx>{`
                        div {
                            height: 64px;
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                        }
                    `}</style>

                    <div>
                        <Tags
                            items={props.allTags}
                            value={selectedTags}
                            onChange={v => {
                                console.log(v)
                                setSelectedTags(v)
                            }}
                        />

                        {/* <Button
                            // type="primary"
                            // disabled
                            shape="circle"
                            icon="plus"
                            size={'large'}
                        /> */}
                    </div>
                </Header>
                <Content>
                    <style jsx>{`
                        div {
                            padding: 10px;
                        }
                    `}</style>

                    <div>
                        <CodeTable
                            data={matchedCodeItems}
                        />
                    </div>
                </Content>
                {/* <Footer>Footer</Footer> */}
            </Layout>
        </AppLayout>
    )
}

Index.getInitialProps = async () => {
    const codeItems = await getAllCodes()
    const allTags = await getAllTags()

    return {
        codeItems,
        allTags,
    }
}

export default Index
