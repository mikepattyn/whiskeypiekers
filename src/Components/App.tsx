import * as React from "react";
import CharacterList from "./Containers/CharacterList";
import './App.css';
export interface AppProps { compiler: string; framework: string; programmer: string; }

const App: React.SFC<{}> = () => {
    return (
        <>
            <h1>The Force Awakens</h1>
            <CharacterList />
        </>)
}
export default App