import * as React from "react"
import { connect } from 'react-redux'
import { createPost } from './Actions/postActions'

interface IPostFormState { title: string, body: string }
class PostFormState implements IPostFormState {
    id: number = null
    title: string = "";
    body: string = "";
    constructor(title: string, body: string) {
        this.title = title
        this.body = body
    }
}

class PostForm extends React.Component<any, IPostFormState> {
    constructor(props: {}) {
        super(props)
        this.state = new PostFormState("", "")
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(event: any) {
        event.persist()
        this.setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    onSubmit(event: any) {
        event.preventDefault()
        const post = new PostFormState(this.state.title, this.state.body)
        this.props.createPost(post)
    }
    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input name="title" type="text" value={this.state.title} onChange={this.onChange} />
                    </div><br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPost })(PostForm);
