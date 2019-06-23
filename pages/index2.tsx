import React from 'react';
import axios from 'axios';
import ReactDataSheet from 'react-datasheet';
import CodeTable from '../src/components/CodeTable'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

import '../src/style.css';
import { ICode } from 'src/app/types';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: [
                [{ value: 1 }, { value: 3 }],
                [{ value: 2 }, { value: 4 }]
            ]
        }
    }

    render() {

        return (
            <>
                <ReactDataSheet
                    data={this.state.grid}
                    valueRenderer={(cell) => cell.value}
                    onCellsChanged={changes => {
                        const grid = this.state.grid.map(row => [...row])
                        changes.forEach(({ cell, row, col, value }) => {
                            grid[row][col] = { ...grid[row][col], value }
                        })
                        this.setState({ grid })
                    }}
                    // data={grid}
                    // valueRenderer={(cell) => cell.value}
                    // sheetRenderer={props => (
                    //     <div className={props.className + ' my-awesome-extra-class'}>
                    //         <div>
                    //             <span className='action-cell' />
                    //             {columns.map(col => (
                    //                 <span>
                    //                     {col.name}
                    //                 </span>
                    //             ))}
                    //         </div>
                    //         <div>
                    //             {props.children}
                    //         </div>
                    //     </div>
                    // )}
                    // rowRenderer={props => (
                    //     <div style={{
                    //         display: 'flex',
                    //     }}>
                    //         <div className='action-cell'>
                    //             <input
                    //                 type='checkbox'
                    //                 // checked={isSelected(props.row)}
                    //                 // onChange={selectHandler}
                    //                 checked={false}
                    //                 // onChange={selectHandler}
                    //             />
                    //         </div>
                    //         {props.children}
                    //     </div>
                    // )}
                    // // valueViewer={MyViewComponent}
                    // dataEditor={props => (
                    //     props.col === 0 ? <MyDatePicker {...props} /> : <DataEditor {...props} />
                    // )}
                />
            </>
        )
    }
}

interface IProps {
    codeItems: ICode[]
}

const Index = (props: IProps) => (
    <div>
        <CodeTable
            data={props.codeItems}
        />
    </div>
)

Index.getInitialProps = async () => {
    const res = await axios.get('http://localhost:1337/codes')

    return {
        codeItems: res.data,
    }
}

export default Index