import React from 'react'
import ReactTable from 'react-table'
import { ICode } from 'src/app/types'
import Tags, { createTags } from '../Tags'

import 'react-table/react-table.css'

interface IProps {
    data: ICode[]
}

const CodeImg = (props: any) => (
    <div>
        <style jsx>{`
            div {
                width: 100px;
                height: 100px;
            }

            img {
                object-fit: cover;
                display: block;
                width: 100%;
                height: 100%;
            }
        `}</style>

        <div>
            <img
                src={props.src}
            />
        </div>  
    </div>
)

const imgUrl = (v: string): string => {
    const i = Math.round(Math.random() * 32)
    const x = i < 10 ? `0${i}` : i
    return `/static/img/P_C_${x}.jpg`
}

export default React.memo((props: IProps) => {
    const fields: String[] = [
        'alias',
        'code',
        'title',
        // 'unit',
        // 'description',
        // 'comment',
        // 'block',
    ]

    const columns:any[] = [
        {
            Header: 'Pic',
            accessor: 'alias',
            minWidth: 100,
            maxWidth: 100,
            resizable: false,
            Cell: (props: any) => (
                <CodeImg
                    src={imgUrl(props.value)}
                />
            )
        },
        ...fields.map(x => ({
            Header: x,
            accessor: x,
        })),
    ]

    columns[1].resizable = false
    columns[1].width = 100
    columns[1].Cell = (props: any) => (
        <a
            href={`/code/${props.value}`}
        >
            {props.value}
        </a>
    )
    columns[2].width = 550
    columns[2].Cell = (props: any) => (
        <Tags
            items={createTags(props.value)}
            value={createTags(props.value)}
            disabled={true}
        />
    )
    // columns[2].width = 500
    // columns[3].width = 100

    // const columns = [
    //     {
    //         Header: 'Title',
    //         accessor: 'title'
    //     },
    //     {
    //         Header: 'Code',
    //         accessor: 'code'
    //     },

    //     // {
    //     //     Header: 'Age',
    //     //     accessor: 'age',
    //     //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    //     // },
    //     // {
    //     //     id: 'friendName', // Required because our accessor is not a string
    //     //     Header: 'Friend Name',
    //     //     accessor: d => d.friend.name // Custom value accessors!
    //     // },
    //     // {
    //     //     Header: props => <span>Friend Age</span>, // Custom header components!
    //     //     accessor: 'friend.age'
    //     // },
    // ]

    if (!props.data.length) {
        return (
            <div>
                no data
            </div>
        )
    }
 
    return (
        <ReactTable
            data={props.data}
            columns={columns}
            showPagination={false}
            defaultPageSize={props.data.length}
        />
    )
})
