import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as adminReducer } from "./adminReducer/reducer";
// import { reducer as AuthReducer } from './AuthReducer/reducer'
import thunk from 'redux-thunk'


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({ adminReducer})



export const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)