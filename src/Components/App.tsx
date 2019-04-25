import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './Stores/store'

import Post from './Post'
import Navigation, { MenuProps } from './Navigation'
import X01 from './X01';

class App extends React.Component {
    render() {
        const props = new MenuProps()
        props.links.push({ label: "WHISKEYPIEKERS", link: "/" })
        props.links.push({ label: "X01", link: "/X01" })
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Navigation links={props.links} />
                    <Route exact path="/" component={Post} />
                    <Route exact path="/X01" component={X01} />
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
