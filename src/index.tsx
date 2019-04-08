import * as React from "react";
import * as ReactDOM from "react-dom";

// Start of component imports
import { NavigationBar } from "./Components/NavigationBar";
import SharedLayout  from "./Components/SharedLayout";
import App from "./Components/App";
// End of component imports

ReactDOM.render(<NavigationBar />, document.getElementById("navigation"));
ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<App compiler="TypeScript" framework="React" programmer="Mike" />, document.getElementById("mainLayout")); // Add the app layout to shared layout