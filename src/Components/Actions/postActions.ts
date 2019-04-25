import { FETCH_POSTS, NEW_POST } from './types'
import { Dispatch } from 'redux';

export const fetchPosts = () => (dispatch: Dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    )
}
export const createPost = (postData: {}) => (dispatch: Dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)})
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        })
    )
}