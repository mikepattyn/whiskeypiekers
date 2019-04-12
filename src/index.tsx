import * as React from "react";
import * as ReactDOM from "react-dom";

// Start of component imports
import { NavigationBar } from "./Components/NavigationBar";
import SharedLayout  from "./Components/SharedLayout";

import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './Stores/Store';
import { getAllCharacters } from './Components/Character/CharacterActions';

import App from "./Components/App";
// End of component imports
interface IProps {
    store: Store<IAppState>;
  }
  
  /* 
  Create a root component that receives the store via props
  and wraps the App component with Provider, giving props to containers
  */
  const Root: React.SFC<IProps> = props => {
    return (
      <Provider store={props.store}>
        <App />
      </Provider>
    );
  };
// Generate the store
const store = configureStore();
store.dispatch(getAllCharacters());

ReactDOM.render(<NavigationBar />, document.getElementById("navigation"));
ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<Root store={store} />, document.getElementById('mainLayout'));