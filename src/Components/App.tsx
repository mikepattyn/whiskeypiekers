import * as React from "react";
import { hot } from "react-hot-loader/root"

export interface AppProps { compiler: string; framework: string; programmer: string; }

const App = (props: AppProps) => 
    <>
        <h1 className="text-center">Hello from {props.compiler}, {props.framework} and {props.programmer}!</h1>
        <div id="section-one"></div>
    </>

export default hot(App)