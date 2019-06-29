import React from 'react'
import { ICategory } from '../../app/types'
import { Button } from 'antd'

interface IProps {
    item: ICategory
    childrenItems: string[]
    showAddButton: boolean
}

const ListItem = (props: IProps) => (
    <li>
        <style jsx>{`
            li {
                margin-bottom: 10px;
            }

            .main {
                display: flex;
                font-size: 1.25em;
                background-color: var(--theme-background-color-second-back);
                color: var(--theme-text-color);

                padding: 5px 5px;
                padding-left: 10px;
            }

            span {
                padding: 5px 5px;
            }

            strong {
                padding-right: 10px;
                display: inline-block;
                user-select: none;
            }
        `}</style>

        <div className={'main'}>
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
        </div>

        {!props.childrenItems ? null : props.childrenItems.map(x => (
            <span key={x}>{x}</span>
        ))}
    </li>
)

export default ListItem
