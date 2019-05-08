
import * as React from "react"
import MediaQuery from 'react-responsive'
import ReactDOM = require("react-dom");

const endBtnTexts = ["OK", "NO SCORE"];
const presetNumbers = [26, 45, 50, 60, 80, 100]


class X01Step2 extends React.Component<any, any> {

    _currentInput = 0; 
    _checkOutEnabled = [ false, false ];
    _continuePlaying = false;

    constructor(props: any) {
        super(props)

        this.addValue = this.addValue.bind(this)
        this.addPreset = this.addPreset.bind(this)
        this.insertScore = this.insertScore.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.setTheEndButton = this.setTheEndButton.bind(this)
    }
    componentDidMount() {
        this.setState({
            currentPlayer: this.props.game.players[0]
        })
    }
    clearInput() {
        document.getElementById('currentInput').innerHTML = "0"
        this._currentInput = 0
        this.setTheEndButton()
    }
    addValue(event: any) {
        var inputField = document.getElementById('currentInput')
        var currentInput = Number(inputField.innerHTML)
        var nextInput = Number(event.target.innerHTML)
        var futureInput = Number(currentInput.toString() + nextInput.toString())
        var currentScore = Number(this.props.currentPlayer.score)

        if (futureInput <= 158) {
            if (currentInput === 0) {
                currentInput = nextInput
            } else {
                currentInput = futureInput
            }
        } else if (futureInput <= 180 && currentScore >= 180) {
            currentInput = futureInput
        }

        inputField.innerHTML = currentInput.toString()

        this._currentInput = Number(currentInput)
        this.setTheEndButton()
    }
    // addPresets func should use the insertScore
    addPreset(event: any) {
        var futureInput = Number(event.target.innerHTML)
        var currentScore = Number(this.state.currentPlayer.score)
        var futureScore = currentScore - futureInput
        var initialScore = Number(this.props.form.score)
        console.log(`Future input: ${futureInput}\nInitial score: ${initialScore}\nCurrent score: ${currentScore}\nNext score: ${futureScore}`)
        if (futureScore == 1) {
            return
        } else if (currentScore > futureInput + 2 || currentScore >= presetNumbers[presetNumbers.length - 1]) {
            this._currentInput = futureInput
            this.insertScore(event)
            this.setTheEndButton()
        } else if (futureScore == 0) {
            console.log("game shot")
        }
    }

    insertScore(event: any) {
        var currentScore = Number(this.state.currentPlayer.score)
        var futureScore = currentScore - this._currentInput
        if(futureScore == 1){
            return
        }
        // target can be a preset value or just the OK / NO SCORE text
        var target = event.target.innerHTML

        this._continuePlaying = endBtnTexts.includes(target) || presetNumbers.includes(Number(target))

        if (this._continuePlaying) {

            this._currentInput = target == "NO SCORE" ? 0 : this._currentInput

            var game = this.props.game

            var currentPlayer = this.state.currentPlayer

            if (game.players[0].name === currentPlayer.name) {
                game.players[0].score = game.players[0].score - this._currentInput
                game.players[0].roundScores.push(this._currentInput)
                if (futureScore <= 170) {
                    this._checkOutEnabled[0] = true
                }
            } else {
                game.players[1].score = game.players[1].score - this._currentInput
                game.players[1].roundScores.push(this._currentInput)
                if (futureScore <= 170) {
                    this._checkOutEnabled[1] = true
                }
            }
            currentPlayer = this.switchPlayer(game, currentPlayer)

            if(futureScore == 0){
                this.props.onWin()
    
            } else {
                this.setState((prevState: any) => ({
                    ...prevState,
                    game: game,
                    currentPlayer: currentPlayer,
                    step: 2
                }))
    
            }

            this.clearInput()

            console.log(this._checkOutEnabled)
        }
    }
    switchPlayer(game: any, currentPlayer: any) {
        var players: any = game.players
        var playersdiv = document.getElementById('players') as HTMLDivElement
        var player = playersdiv.children[0] as HTMLDivElement
        var player1 = playersdiv.children[1] as HTMLDivElement
        if (players[0].name == currentPlayer.name) {
            player.style.borderBottom = "0"
            player1.style.borderBottom = "10px solid orange"
            return players[1]
        } else {
            var player = playersdiv.children[0] as HTMLDivElement
            player.style.borderBottom = "10px solid orange"
            player1.style.borderBottom = "0"
            return players[0]
        }

    }
    componentDidUpdate() {
        console.log(this.state)
    }
    setTheEndButton() {
        this._currentInput > 0 ? document.querySelector('#theEnd').innerHTML = "OK" : document.querySelector('#theEnd').innerHTML = "NO SCORE"
    }
    render() {
        const game = this.props.game

        var averages = []
        var highests = []
        var mySum = 0
        for (var i = 0; i < game.players.length; i++) {
            for (var j = 0; j < game.players[i].roundScores.length - 1; j++) {
                mySum = game.players[i].roundScores.reduce((a: any, b: any) => a + b, 0);
            }
            averages.push(Math.round(mySum / (game.players[i].roundScores.length - 1)))
            mySum = 0
            highests.push(Math.round(game.players[i].roundScores.reduce((a: any, b: any) => Math.max(a, b))))
        }

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
                    <div className="flex-row" id="players">
                        <div className="flex-col">
                            <p>{game.players[0].name}</p>
                            <h1>{game.players[0].score}</h1>
                            <p>Hi/Avg <span>{highests[0]}/{averages[0]}</span></p>
                            <p>Sets: {0} - Legs: {0}</p>
                        </div>
                        <div className="flex-col">
                            <p>{game.players[1].name}</p>
                            <h1>{game.players[1].score}</h1>
                            <p>Hi/Avg <span>{highests[1]}/{averages[1]}</span></p>
                            <p>Sets: {0} - Legs: {0}</p>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-col-calc">
                            <div className="calc-row">
                                <div className="calc-col-top">
                                    <span>UNDO</span></div>
                                <div className="calc-col-top">
                                    <span id='currentInput'>0</span></div>
                                <div className="calc-col-top">
                                    <span>REMAINING</span></div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>26</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>1</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>2</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>3</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>60</span>
                                </div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>45</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>4</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>5</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>6</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>80</span>
                                </div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>50</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>7</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>8</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addValue}>9</span>
                                </div>
                                <div className="calc-col-calc">
                                    <span onClick={this.addPreset}>100</span>
                                </div>
                            </div>
                            <div className="calc-row">
                                <div className="calc-col-bot">
                                    <span onClick={this.clearInput}>CLEAR</span>
                                </div>
                                <div className="calc-col-bot">
                                    <span onClick={this.addValue}>0</span>
                                </div>
                                <div className="calc-col-bot">
                                    <span id="theEnd" onClick={this.insertScore}>NOSCORE</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

            </div>
        )
    }
}

export default X01Step2;
