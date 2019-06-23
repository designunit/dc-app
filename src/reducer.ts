// import { connectRouter, RouterState } from 'connected-react-router'
// import { History } from 'history'
import { combineReducers } from 'redux'
import { FormStateMap, reducer as formReducer } from 'redux-form'
// import { reducer as modal, ReduxModalState } from 'redux-modal'

// import { IAction } from './core/types'
// import loading, { initialState as loadingInitialState } from './features/Loading/reducers'
// import login, { initialState as loginInitialState } from './features/PageLogin/reducers'
// import person, { initialState as personInitialState } from './features/PagePerson/reducers'
// import persons from './features/PagePersons/reducers'
// import requisite, { initialState as requisiteInitialState } from './features/requisite/reducers'
// import suggest, { initialState as suggestInitialState } from './features/suggest/reducers'
// import user, { initialState as userInitialState } from './features/user/reducers'

export interface IAppState {
    // loading: typeof loadingInitialState
    // user: typeof userInitialState

    // lastUpdate: number,
    // light: boolean,
    // count: number,

    form: FormStateMap
    // login: typeof loginInitialState
    // requisite: typeof requisiteInitialState
    // person: typeof personInitialState
    // suggest: typeof suggestInitialState
    // persons: any
    // router: RouterState
    // modal: ReduxModalState
}

// import { RouterAction, LocationChangeAction } from 'react-router-redux';
// type ReactRouterAction = RouterAction | LocationChangeAction;
// import { CountersAction } from '../features/counters';

// export type RootAction = ReactRouterAction | CountersAction;

// type Action = IAction<any>
type Action = any

// export default (history: History<any>) => combineReducers<IAppState, Action>({
export default (ext: any) => combineReducers<IAppState, Action>({
    ...ext,
    // login,
    // user,
    // loading,
    // requisite,
    // person,
    // persons,
    // suggest,
    // router: connectRouter(history),
    form: formReducer,
    // modal,
})