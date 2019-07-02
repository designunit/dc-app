import React from 'react'
import { ICategory, ICode } from '../../app/types'
import { Button } from 'antd'

interface IProps {
    item: ICategory
    selected: boolean
    childrenItems: ICode[]
    renderFooter?(item:ICategory): React.ReactNode
    showAddButton: boolean
    onClick(event: React.MouseEvent): void
}

const ListItem: React.FC<IProps> = props => (
    <li>
        <style jsx>{`
            li {
                --background-color: var(${props.selected ? '--theme-color-dark' : '--theme-background-color-second-back'});
                --color: var(${props.selected ? '--theme-color-light' : '--theme-text-color'});

                margin-bottom: 10px;
            }

            .main {
                display: flex;
            }

            span {
                padding: 5px 5px;
            }

            strong {
                padding-right: 10px;
                display: inline-block;
                user-select: none;
            }

            button {
                cursor: pointer;

                flex: 1;
                text-align: left;

                font-size: 1.25em;
                background-color: var(--background-color);
                color: var(--color);

                padding: 5px 5px;
                padding-left: 10px;

                border: none;
            }

            button:hover {
                filter: brightness(95%);
            }
        `}</style>

        <div className={'main'}>
            <button
                onClick={props.onClick}
            >
                <strong>{props.item.prefix}</strong>
                <span>{props.item.name}</span>
            </button>

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

        {!props.renderFooter ? null : (
            <footer>
                {props.renderFooter(props.item)}
            </footer>
        )}
    </li>
)

export default ListItem
