import * as React from "react";
import { hot } from "react-hot-loader";

export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export default hot(module)(App)