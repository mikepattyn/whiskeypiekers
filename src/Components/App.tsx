import * as React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';
import { Provider } from 'react-redux';

import store from './Stores/store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm />
                        <hr />
                    <Posts posts={[]} />
                </div>
            </Provider>
        );
    }
}

export default App;
