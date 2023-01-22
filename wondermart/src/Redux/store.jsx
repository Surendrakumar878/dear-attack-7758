import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as adminReducer } from "./adminReducer/reducer";
import { reducer as authReducer } from './authReducer/reducer'
import {reducer as productReducer} from './productsReducer/reducer'
import thunk from 'redux-thunk'


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({authReducer, adminReducer,productReducer})



export const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)