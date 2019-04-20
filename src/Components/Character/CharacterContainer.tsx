import { IAppState } from "../../Stores/Store";
import * as React from "react";
import { connect } from "react-redux";
import CharacterPresentationalComponent from "./CharacterPresentational";

const mapStateToProps = (state: IAppState) => {
    return {
        characters: state.characterState.characters
    };
};


class CharacterContainerComponent extends CharacterPresentationalComponent {
    render() {
        return (
            <CharacterPresentationalComponent characters={this.state} />
        );
    }
}
export default connect(mapStateToProps)(CharacterContainerComponent)

