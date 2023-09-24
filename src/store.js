import { applyMiddleware,compose,  legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./Reducers"
import thunk from "redux-thunk";

const {REACT_APP_ENV} = process.env

const persistRootReducer = persistReducer({
    key:'root',
    storage,
    whitelist:[
        'session'
    ]
      },
    rootReducer
   )


const composeEnhancers =
    (REACT_APP_ENV === 'development' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose


export const store  =  createStore(persistRootReducer,composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)
