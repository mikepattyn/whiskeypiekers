import * as React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './Actions/postActions'

export interface IAppState {
    posts: [],
    game: {},
    listData: []
}
class Posts extends React.Component<any, IAppState> {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps: any){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map((post: any, index: number) => (
            <div key={index.toString() + post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts)
