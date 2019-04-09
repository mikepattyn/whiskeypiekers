import * as React from "react";
import './App.css';
import { CharacterContainerComponent } from "./Containers/CharacterContainer";
export interface AppProps { compiler: string; framework: string; programmer: string; }

const App: React.SFC<{}> = () => {
    return (
        <>
            <h1>The Force Awakens</h1>
            <CharacterContainerComponent />
        </>)
}
export default App