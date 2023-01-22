import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as adminReducer } from "./adminReducer/reducer";
import { reducer as authReducer } from './authReducer/reducer'
<<<<<<< HEAD
import { reducer as cartReducer } from './cartReducer/reducer'
=======
import {reducer as productReducer} from './productsReducer/reducer'
>>>>>>> master
import thunk from 'redux-thunk'


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

<<<<<<< HEAD
const rootReducer = combineReducers({authReducer, adminReducer,cartReducer})
=======
const rootReducer = combineReducers({authReducer, adminReducer,productReducer})
>>>>>>> master



export const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)