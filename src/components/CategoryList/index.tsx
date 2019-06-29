import React from 'react'
import { ICategory } from '../../app/types'
import ListItem from './ListItem'

export interface ICategoryListProps {
    items: ICategory[]
}

const CategoryList: React.FC<ICategoryListProps> = (props) => {
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
                {props.items.map(x => (
                    <ListItem
                        key={x.id}
                        showAddButton={false}
                        item={x}
                        childrenItems={x.childrenTags}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CategoryList
