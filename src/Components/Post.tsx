import * as React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'
class Post extends React.Component {
    render() {
        return (
            <div>
                <PostForm />
                <hr />
                <Posts posts={[]} />
            </div>
        )
    }
}
export default Post