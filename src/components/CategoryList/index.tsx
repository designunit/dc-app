import React from 'react'
import { ICategory } from '../../app/types'
import ListItem from './ListItem'
import CodeTagList from '../CodeTagList'
import { arraySplit, arrayPrune } from '../../lib/array'

type Selection = string[]

export interface ICategoryListProps {
    items: ICategory[]
    selection: Selection
    onSelect(indices: Selection): void
}

const CategoryList: React.FC<ICategoryListProps> = (props) => {
    const topLevelTags = props.items.map(x => x.prefix)
    const [topSelection, subSelection] = arraySplit(props.selection, s => topLevelTags.includes(s))

    return (
        <div>
            <style jsx>{`
                div {
                    padding: 10px;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
            `}</style>

            <ul>
                {props.items.map(item => (
                    <ListItem
                        key={item.id}
                        showAddButton={false}
                        item={item}
                        childrenItems={item.childrenTags}
                        selected={topSelection.includes(item.prefix)}
                        onClick={() => {
                            props.onSelect([item.prefix])
                        }}
                        renderFooter={x => (
                            <CodeTagList
                                items={x.childrenTags}
                                selection={topSelection.includes(x.prefix) ? subSelection : []}
                                onChange={(codeItem, checked) => {
                                    const code = codeItem.code
                                    props.onSelect(checked
                                        ? [x.prefix, ...subSelection, code]
                                        : [x.prefix, ...arrayPrune(subSelection, code)]
                                    )
                                }}
                            />
                        )}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CategoryList
