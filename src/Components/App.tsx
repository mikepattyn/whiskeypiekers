import * as React from "react";

export interface AppProps { compiler: string; framework: string; programmer: string; }

export const App = (props: AppProps) => <h1>Hi from {props.compiler}, {props.framework} and {props.programmer}!</h1>;