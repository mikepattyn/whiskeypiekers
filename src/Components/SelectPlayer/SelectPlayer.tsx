import * as React from "react"
import './SelectPlayer.scss'

class SelectPlayer extends React.Component<any, any> {
    render() {
        return (
            <div className="form-row row-select-player">
                <div className="form-input-group col">
                    <label>Player 1</label>
                    <input onChange={this.props.onChange} className="form-control" placeholder="Player name" name="player1" />
                </div>
                <div className="form-input-group col">
                    <label>Player 2</label>
                    <input onChange={this.props.onChange} className="form-control" placeholder="Player name" name="player2" />
                </div>
            </div>
        )
    }
}

export default SelectPlayer