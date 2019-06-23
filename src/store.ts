import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createReducer from './reducer'
import { reducer as codesReducer} from './reducers/codes'

const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
}

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

// REDUCERS
export const ereducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                // light: !!action.light
                light: !state.light,
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })
        default:
            return state
    }
}

// ACTIONS
export const serverRenderClock = () => {
    return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
    return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
    return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
    return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
    return { type: actionTypes.RESET }
}

export function initializeStore(initialState = exampleInitialState, options) {
    const reducer = createReducer({
        example: ereducer,
        codes: codesReducer,
    })

    return createStore(
        reducer,
        initialState as any,
        // applyMiddleware(),
        composeWithDevTools(applyMiddleware())
    )
}