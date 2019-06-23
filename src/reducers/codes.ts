import { ICode } from "src/app/types";

const initialState = {
    items: {}
}

export const actionTypes = {
    SET_ITEM: '@app/SET_ITEM',
    // TICK: 'TICK',
    // INCREMENT: 'INCREMENT',
    // DECREMENT: 'DECREMENT',
    // RESET: 'RESET'
}

// // ACTIONS
export const setCode = (item: ICode) => {
    return {
        type: actionTypes.SET_ITEM,
        payload: item,
    }
}

// export const startClock = () => {
//     return { type: actionTypes.TICK, light: true, ts: Date.now() }
// }

// export const incrementCount = () => {
//     return { type: actionTypes.INCREMENT }
// }

// export const decrementCount = () => {
//     return { type: actionTypes.DECREMENT }
// }

// export const resetCount = () => {
//     return { type: actionTypes.RESET }
// }

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ITEM:
            const item: ICode = action.payload

            return {
                ...state,
                items: {
                    ...state.items,
                    [item.code]: item,
                }
            }

        // case actionTypes.INCREMENT:
        //     return Object.assign({}, state, {
        //         count: state.count + 1
        //     })
        // case actionTypes.DECREMENT:
        //     return Object.assign({}, state, {
        //         count: state.count - 1
        //     })
        // case actionTypes.RESET:
        //     return Object.assign({}, state, {
        //         count: exampleInitialState.count
        //     })
        default:
            return state
    }
}
