import * as React from "react";
import './App.scss';
// import  CharacterContainerComponent from "./Character/CharacterContainer";
export interface AppProps { compiler: string; framework: string; programmer: string; }

const App: React.SFC<{}> = () => {
    return (
        <div id="test">
            <h1 className="titleSite">The Force Awakens</h1>
        </div>
    )
}
export default App