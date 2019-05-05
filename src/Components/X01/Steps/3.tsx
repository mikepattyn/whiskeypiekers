import * as React from "react"
class X01Step3 extends React.Component<any, any> {
    render(){
        var game = this.props.game
        var lijst: any = []

        console.log(game)
        var scoreTable: Number[][] = [[501], [501]]
        for(var i = 0; i < game.players.length; i++){
            for(var j = 1; j < game.players[i].roundScores.length; j++){
                scoreTable[i][j] = Number(scoreTable[i][j-1]) -  game.players[i].roundScores[j]
            }      
        }
        console.log(scoreTable)
        for(var i = 0; i < game.players.length; i++){
            
            lijst[i] = []
            for(var j = 0; j < scoreTable[i].length; j++){
                var td = React.createElement('span', {}, scoreTable[i][j])
                var row = React.createElement('div', {key: `score${i}${j}`}, td)
                lijst[i].push(row)
            }
        }
        return (
            <div className="x01-training-game">
                <h1>Game history</h1>
                <div className="score-list-div">
                    <div>{ lijst[0]}</div>
                    <div>{ lijst[1]}</div>
                </div>
            </div>
        )
    }
}
export default X01Step3
