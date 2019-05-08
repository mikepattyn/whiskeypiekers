import * as React from 'react'
import { connect } from 'react-redux';
import { startX01Training } from '../Actions/x01Actions';

import X01Step1 from './Steps/1';
import X01Step2 from './Steps/2';
import X01Step3 from './Steps/3';
import { X01TrainingGame, X01Player, X01Set, X01Leg } from '../Classes/X01';
import { IX01Player } from '../../Interfaces/X01';
const X01TrainingState = {
    step: 1,
    form: {
        level: 1,
        checkout: 1,
        score: 501,
        sets: 1,
        legs: 3
    },
    game: {
    },
    currentPlayer: {

    }
}
class X01TrainingForm extends React.Component<any, any> {
    p1 = "Mike"
    p2 = "Jonas"
    constructor(props: {}) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onWin = this.onWin.bind(this)
        this.state = X01TrainingState
    }
    onChange = (event: any) => {
        let nextState = this.state.form
        nextState[event.target.name] = event.target.value
        event.persist()
        this.setState((prevState: any) => ({
            ...prevState,
            form: nextState
        }));
    }
    componentDidUpdate() {
        if (this.state.step === 1) {
            let button: HTMLButtonElement = document.getElementById('x01-training-submit-btn') as HTMLButtonElement
            button.disabled = (Number(this.state.form.level) !== 0 && Number(this.state.form.checkout) !== 0 && Number(this.state.form.score) !== 0 && Number(this.state.form.sets) !== 0 && Number(this.state.form.legs) !== 0) ? false : true
        } else {
            console.log("step 2 component updated");
        }
    }
    onSubmit = (event: any) => {
        event.preventDefault();
        const names = [this.p1, this.p2]
        const game: X01TrainingGame = new X01TrainingGame()
        game.level = this.state.form.level
        game.checkout = this.state.form.checkout

        let players: IX01Player[] = Array<X01Player>()
        names.forEach((name: string, index: number) => {
            let player: X01Player = new X01Player()
            player.name = name
            player.setsPlayed = []
            player.roundScores = [0]
            player.score = this.state.form.score
            for (var sets = 0; sets < this.state.form.sets; sets++) {
                var set = new X01Set()
                set.legs = []
                for (var legs = 0; legs < this.state.form.legs; legs++) {
                    set.legs.push(new X01Leg())
                }
                player.setsPlayed.push(set)
            }
            players.push(player)
        })
        game.players = players

        this.setState((prevState: any) => ({
            ...prevState,
            game: game,
            step: 2,
            currentPlayer: players[0]
        }))

    }
    onWin() {
        var game = this.state.game

        this.setState((prevState: any) => ({
            ...prevState,
            game: game,
            step: 3
        }))
    }
    render() {
        switch (this.state.step) {
            case 1: {
                return (
                    <X01Step1 onSubmit={this.onSubmit} onChange={this.onChange} />
                )
            }
            case 2: {
                return (
                    <X01Step2 onWin={this.onWin} form={this.state.form} game={this.state.game} currentPlayer={this.state.game.players[0]} />
                )
            }
            case 3: {
                return (
                    <X01Step3 game={this.state.game} gameScore={this.state.form.score}/>
                )
            }
        }
    }
}

export default connect(null, { startX01Training })(X01TrainingForm)