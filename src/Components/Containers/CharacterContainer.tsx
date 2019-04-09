import { IAppState } from "../../Stores/Store";
import * as React from "react";
import { connect } from "react-redux";
import { CharacterPresentationalComponent } from "../Presentationals/CharacterPresentational";
var testje = {}
const mapStateToProps = (state: IAppState) => {
    testje = {
        characters: state.characterState.characters,
    };
    return {
        characters: testje,
    };
};


export class CharacterContainerComponent extends React.Component {
    constructor(props: any){
        super(props);
    }
    render() {
        return (
            <CharacterPresentationalComponent characters={testje} />
        );
    }
}
export default connect(mapStateToProps)