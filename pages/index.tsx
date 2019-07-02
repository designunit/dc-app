import React, { useState } from 'react'
import CodeTable from '../src/components/CodeTable'
import { ICode, ICategory } from '../src/app/types'
import { Layout } from 'antd'
import Tags from '../src/components/Tags'
import AppLayout from '../src/components/AppLayout'
import CategoryList from '../src/components/CategoryList'
import { getCodeParts } from '../src/app/lib/code'
import * as api from '../src/app/api'
import { filterCodesByKeywords } from '../src/app/lib/search'

const { Header, Content } = Layout

interface IProps {
    codeItems: ICode[]
    categories: ICategory[]
    allTags: string[]
}

const Index = (props: IProps) => {
    const [searchKeywords, setSearchKeywords] = useState(new Set<string>())
    // const [selectedSidebar, setSelectedSidebar] = useState([])
    // onChangeChildrenItem(value: ICode, checked: boolean): void 

    // const selection = {
    //     category: [1],
    //     tags: [1, 3]
    // }

    // const category = props.categories[selectedCategories[0]]
    // const st = [category.prefix]

    const matchedCodeItems = filterCodesByKeywords(props.codeItems, searchKeywords)

    return (
        <AppLayout
            sideComponent={(
                <CategoryList
                    items={props.categories}
                    selection={searchKeywords}
                    onSelect={setSearchKeywords}
                    // onChangeChildrenItem={props.onChangeChildrenItem}
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
                            allowNew={true}
                            items={props.allTags}
                            value={[...searchKeywords]}
                            onChange={xs => setSearchKeywords(new Set(
                                xs.flatMap(getCodeParts)
                            ))}
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
