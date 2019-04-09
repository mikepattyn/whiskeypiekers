import { IAppState } from "../../Stores/Store";
import * as React from "react";
import { connect } from "react-redux";
import { CharacterPresentationalComponent } from "../Presentationals/CharacterPresentational";
const mapStateToProps = (state: IAppState) => {
    return {
        characters: state.characterState.characters,
    };
};


export class CharacterContainerComponent extends React.Component {
    constructor(props: any){
        super(props);
    }
    render() {
        return (
            <CharacterPresentationalComponent characters={this.props} />
        );
    }
}
export default connect(mapStateToProps)