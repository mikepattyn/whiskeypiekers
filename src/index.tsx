import * as React from "react";
import * as ReactDOM from "react-dom";

// Start of component imports
import { SharedLayout } from "./Components/SharedLayout";
import { App } from "./Components/App";
// End of component imports

ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<App compiler="TypeScript" framework="React" />, document.getElementById("mainLayout")); // Add the app layout to shared layout