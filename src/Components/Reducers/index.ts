import { combineReducers } from 'redux'
import PostReducer from './PostReducer'
import X01Reducer from './X01Reducer'
export default combineReducers({
    posts: PostReducer,
    game: X01Reducer
})