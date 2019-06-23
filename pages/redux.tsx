import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../src/store'
import FormLogin from '../src/components/FormLogin';
// import Examples from '../components/examples'

class Index extends React.Component<any> {
    private timer: number

    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req

        // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
        // reduxStore.dispatch(serverRenderClock(isServer))
        reduxStore.dispatch(serverRenderClock())

        return {
            hi: 1,
        }
    }

    componentDidMount() {
        // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
        // TO TICK THE CLOCK
        this.timer = setInterval(() => this.props.startClock(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.props.example, null, 4)}
                </pre>

                <FormLogin/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    startClock
}

export default connect(
    (state) => state,
    mapDispatchToProps
)(Index)