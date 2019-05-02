import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './Stores/store'

import Navigation, { MenuProps } from './Navigation'
import APP_X01 from './App_X01';
import './App.scss'
class App extends React.Component {
    render() {
        const props = new MenuProps()
        props.links.push({ label: "WHISKEYPIEKERS", link: "/" })
        props.links.push({ label: "X01", link: "/X01" })
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Navigation links={props.links} />
                    <Route path="/X01" component={APP_X01} />
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
