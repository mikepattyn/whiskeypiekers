import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './../Reducers/index'
const initialState = {}
const middleware = [thunk]
let devtools: any = (window as any)['devToolsExtension'] ? (window as any)['devToolsExtension']() : (f:any)=>f;

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        devtools
    )
)
export default store
