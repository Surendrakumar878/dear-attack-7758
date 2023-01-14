import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './AuthReducer/reducer'
import { reducer as ProductReducer } from './ProductReducer/reducer'
import { reducer as CartReducer } from "./CartReducer/reducer"
import thunk from 'redux-thunk'
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
// import { reducer } from './reducer';

const persistConfig={
    key:"coolmart-persist",
    storage
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({AppReducer,AuthReducer,ProductReducer,CartReducer})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = legacy_createStore(persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const persistor=persistStore(store);
export {persistor};

