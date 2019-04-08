import * as React from "react";
import { hot } from "react-hot-loader/root"

export interface AppProps { compiler: string; framework: string; programmer: string; }

const App = (props: AppProps) => 
    <h1>Hello from {props.compiler}, {props.framework} and {props.programmer}!</h1>;
    
export default hot(App)