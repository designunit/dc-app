import React, { useState } from 'react'
import CodeTable from '../src/components/CodeTable'
import { ICode, ICategory } from '../src/app/types'
import { Layout } from 'antd'
import Tags from '../src/components/Tags'
import AppLayout from '../src/components/AppLayout'
import CategoryList from '../src/components/CategoryList'
import { filterItems } from '../src/app/search'
import * as api from '../src/app/api'

const { Header, Content } = Layout

interface IProps {
    codeItems: ICode[]
    categories: ICategory[]
    allTags: string[]
}

const Index = (props: IProps) => {
    const [selectedTags, setSelectedTags] = useState([])

    const matchedCodeItems = filterItems(props.codeItems, selectedTags)

    return (
        <AppLayout
            sideComponent={(
                <CategoryList
                    items={props.categories}
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
    const categories = await api.getCategories()
    const codeItems = await api.getAllCodes()
    const allTags = await api.getAllTags()

    return {
        categories,
        codeItems,
        allTags,
    }
}

export default Index
