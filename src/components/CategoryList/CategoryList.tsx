import React from 'react'
import { ICategory } from '../../app/types'
import ListItem from './ListItem'

interface IProps {
    categories: ICategory[]
    showAddButton: boolean
}

const CategoryList = (props: IProps) => (
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
            {props.categories.map(x => (
                <ListItem
                    key={x.id}
                    showAddButton={props.showAddButton}
                    item={x}
                    childrenItems={x.childrenTags}
                />
            ))}
        </ul>
    </div>
)

export default CategoryList
