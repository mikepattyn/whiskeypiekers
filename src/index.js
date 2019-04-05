import React from "react";
import ReactDOM from "react-dom";

// Start of component imports
import App from "./App.js";
import SharedLayout from "./SharedLayout.js";
// End of component imports

ReactDOM.render(<SharedLayout />, document.getElementById("root")); // Add a shared layout to root
ReactDOM.render(<App />, document.getElementById("mainLayout")); // Add the app layout to shared layout