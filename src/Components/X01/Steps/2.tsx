
import * as React from "react"
import MediaQuery from 'react-responsive'
import { X01Player } from "../../Classes/X01";
import { IX01TrainingGame } from "../../../Interfaces/X01";
class X01Step2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const game = this.props.game.game
        console.log(game)
        return (
            <div className="container x01-training-game">
                <MediaQuery query="(min-device-width: 768px)">
                    <div className="flex-row">
                        <div className="flex-col">
                            <h1>{this.props.form.score - (game.players[0].roundScores.length > 0 ? game.players[0].roundScores.reduce((a: number, b: number) => a + b) : 0)}</h1>
                        </div>
                        <div className="flex-col">
                            <div className="calc-row"></div>
                            <div className="calc-row"></div>
                            <div className="calc-row"></div>
                            <div className="calc-row"></div>
                            <div className="calc-row"></div>
                        </div>
                        <div className="flex-col">
                            <h1>{this.props.form.score - (game.players[1].roundScores.length > 0 ? game.players[0].roundScores.reduce((a: number, b: number) => a + b) : 0)}</h1>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 767px)">
                    <div className="flex-row">
                        <div className="flex-col">
                            <p>{game.players[0].name}</p>
                            <h1>{this.props.form.score - (game.players[0].roundScores.length > 0 ? game.players[0].roundScores.reduce((a: number, b: number) => a + b) : 0)}</h1>
                            <p>Hi/Avg <span>180/180</span></p>
                            <p>Sets: {0} - Legs: {0}</p>
                        </div>
                        <div className="flex-col">
                            <p>{game.players[1].name}</p>
                            <h1>{this.props.form.score - (game.players[1].roundScores.length > 0 ? game.players[0].roundScores.reduce((a: number, b: number) => a + b) : 0)}</h1>
                            <p>Hi/Avg <span>180/180</span></p>
                            <p>Sets: {0} - Legs: {0}</p>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-col-calc">
                            <div className="calc-row">
                                <div className="calc-col-top"></div>
                                <div className="calc-col-top"></div>
                                <div className="calc-col-top"></div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                                <div className="calc-col-calc"></div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-bot"></div>
                                <div className="calc-col-bot"></div>
                                <div className="calc-col-bot"></div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

            </div>
        )
    }
}

export default X01Step2;
