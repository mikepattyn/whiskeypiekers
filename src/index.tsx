import * as React from "react";
import * as ReactDOM from "react-dom";

// Start of component imports
import SharedLayout from "./Components/SharedLayout";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './Stores/Store';
import { getAllCharacters } from './Components/Character/CharacterActions';

import App from "./Components/App";
import CharacterPresentationalComponent from "./Components/Character/CharacterPresentational";
import { HelloWorld } from "./Components/HelloWorldComponent";

// End of component imports
interface IProps {
  store: Store<IAppState>;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Routing = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">DARTINGAPP</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Training
                    </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <Link to="/x01" className="dropdown-item">X01</Link>
                  <Link to="/x01" className="dropdown-item">CHALLENGE MODE</Link>
                  <Link to="/x01" className="dropdown-item">ROUND THE WORLD</Link>
                  <Link to="/x01" className="dropdown-item">CATCH 40</Link>
                  <Link to="/x01" className="dropdown-item">HIGHSCORE</Link>
                  <Link to="/x01" className="dropdown-item">CRICKET</Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link to="/x01" className="dropdown-item">GAME420</Link>
                  <Link to="/x01" className="dropdown-item">TARGET TRAINING</Link>
                  <Link to="/x01" className="dropdown-item">A1 DRILL</Link>
                  <Link to="/x01" className="dropdown-item">501 VS. CPU</Link>
                  <Link to="/x01" className="dropdown-item">SCORING</Link>
                  <Link to="/x01" className="dropdown-item">BOB'S 27</Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link to="/x01" className="dropdown-item">FINISHING 50</Link>
                  <Link to="/x01" className="dropdown-item">HALVE IT</Link>
                  <Link to="/x01" className="dropdown-item">CRICKET SCORING</Link>
                  <Link to="/x01" className="dropdown-item">ROUND THE WORLD SCORING</Link>
                  <Link to="/x01" className="dropdown-item">JDC CHALLENGE</Link>
                  <Link to="/x01" className="dropdown-item">121 CHECKOUT GAME</Link>
                </div>
              </div>

            </div>
          </li>
          <li className="nav-item">
            <Link to="/characters" className="nav-link">Users</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Multiplayer
                    </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/x01" className="dropdown-item">X01</Link>
              <Link to="/x01" className="dropdown-item">HIGHSCORE</Link>
              <Link to="/x01" className="dropdown-item">CRICKET</Link>
              <Link to="/x01" className="dropdown-item">BUETT'S ELEVEN</Link>
              <Link to="/x01" className="dropdown-item">HALVE IT / SPLIT SCORE</Link>
              <Link to="/x01" className="dropdown-item">KILLER</Link>
              <Link to="/x01" className="dropdown-item">JDC CHALLENGE</Link>

            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <Route exact path="/" component={App} />
    <Route exact path="/characters" component={CharacterPresentationalComponent} />
    <Route exact path="/hello" component={HelloWorld} />
  </Router>
)
// ReactDOM.render(routing, document.getElementById('root'))

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Routing />
    </Provider>
  );
};
// Generate the store
const store = configureStore();
store.dispatch(getAllCharacters());
ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<Root store={store} />, document.getElementById('mainLayout'));