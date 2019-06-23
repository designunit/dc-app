import React from 'react'
import { connect } from 'react-redux'
import * as api from '../src/app/api'
import { setCode } from '../src/reducers/codes'

import { ICode } from '../src/app/types'
import FormCode from '../src/components/FormCode'

interface IProps {
    item: ICode
}

const Index = (props: IProps) => (
    <div>
        {/* <pre>
            {JSON.stringify(props, null, 4)}
        </pre> */}

        <div>
            <style jsx>{`
                div {
                    width: 300px;
                    // box-shadow: 1px solid #403c3c;
                }

                img {
                    display: block;
                    width: 100%;
                }
            `}</style>
            <img src={`/static/img/${props.item.code}.jpg`} />
        </div>

        <FormCode
            initialValues={props.item}
            handleSubmit={console.log}
        />
    </div>
)

Index.getInitialProps = async ({ store, query }) => {
    const id = query.id
    const code = await api.getCode(id)
    store.dispatch(setCode(code))

    return {
        codeId: id,
    }
}

// const mapDispatchToProps = {
//     startClock
// }

export default connect(
    (state, props) => ({
        // state,
        item: state.codes.items[props.codeId],
        // props,
    }),
    null
)(Index)