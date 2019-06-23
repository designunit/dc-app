import React from 'react'
import { ICategory } from '../../app/types'
import { Button } from 'antd'
// import Link from 'next/link'

interface IProps {
    item: ICategory
    showAddButton: boolean
}

const ListItem = (props: IProps) => (
    <li>
        <style jsx>{`
            {/* div {
                padding: 10px;
                // padding-left: 30px;
            } */}

            {/* ul {
                list-style: none;
                padding: 0;
                margin: 0;
            } */}

            li {
                display: flex;

                font-size: 1.25em;
                background-color: var(--theme-background-color-second-back);
                color: var(--theme-text-color);

                padding: 5px 5px;
                padding-left: 10px;
                margin-bottom: 10px;
            }

            strong {
                //width: 25px;
                padding-right: 10px;
                display: inline-block;
                user-select: none;
            }
        `}</style>

        <div style={{
            flex: 1,
        }}>
            <strong>{props.item.prefix}</strong>
            <span>{props.item.name}</span>
        </div>

        <div>
            {!props.showAddButton ? null : (
                <Button
                    icon={'plus'}
                    size={'small'}
                    type={'link'}
                    disabled={true}
                />
            )}
        </div>
    </li>
)

export default ListItem
