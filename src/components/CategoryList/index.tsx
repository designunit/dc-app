import React from 'react'
import { ICategory } from '../../app/types'
// import Link from 'next/link'
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
                // padding-left: 30px;
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
                    item={x}
                    showAddButton={props.showAddButton}
                />
            ))}
        </ul>
    </div>
)

export default CategoryList
