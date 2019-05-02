import * as React from 'react'
import { connect } from 'react-redux';
import { startX01Training } from '../Actions/x01Actions';

import X01Step1 from './Steps/1';
import X01Step2 from './Steps/2';
import { X01TrainingGame, X01Player, X01Set, X01Leg } from '../Classes/X01';
import { IX01Player } from '../../Interfaces/X01';
const X01TrainingState = {
    step: 1,
    form: {
        level: 0,
        checkout: 0,
        score: 0,
        sets: 0,
        legs: 0
    },
    game: {
    }
}
class X01TrainingForm extends React.Component<any, any> {
    constructor(props: {}) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
        const names = ["Player 1", "Computer"]
        const game: X01TrainingGame = new X01TrainingGame()
        game.level = this.state.form.level
        game.checkout = this.state.form.checkout

        let players: IX01Player[] = Array<X01Player>()
        names.forEach((name: string, index: number) => {
            let player: X01Player = new X01Player()
            player.name = name
            player.setsPlayed = []
            player.roundScores = [0]
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
            game: {game},
            step: 2
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
                    <X01Step2 form={this.state.form} game={this.state.game} />
                )
            }

        }
    }
}

export default connect(null, { startX01Training })(X01TrainingForm)