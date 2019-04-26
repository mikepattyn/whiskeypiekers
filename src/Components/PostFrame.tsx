import * as React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'
class PostFrame extends React.Component {
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
export default PostFrame