import React, { useState } from 'react'
import CodeTable from '../src/components/CodeTable'
import { ICode } from '../src/app/types'
import { getAllCodes, getAllTags } from '../src/app/api'
import { Layout } from 'antd'
import Tags from '../src/components/Tags'
import { filterItems } from '../src/app/search';

const { Header, Content } = Layout

interface IProps {
    codeItems: ICode[]
    allTags: string[]
}

const Index = (props: IProps) => {
    const [selectedTags, setSelectedTags] = useState([])

    const matchedCodeItems = filterItems(props.codeItems, selectedTags)

    return (
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
