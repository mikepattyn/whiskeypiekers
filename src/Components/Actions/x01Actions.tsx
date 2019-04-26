import { Dispatch } from "redux";
import { FETCH_X01_TRAINING_DATA } from "./types";
import { maxScoresList, checkOutList, levelList, setList, legsList } from "../../Static/X01";
import * as React from 'react'

// export const createX01Game = (form: IX01TrainingFormState) => (dispatch: Dispatch) => {
//     function createX01TrainingGame(state: IX01TrainingFormState): IX01TrainingGame {
//         let game: IX01TrainingGame = null
//         if (state == null || state.level == null || state.checkout == null || state.score == null || state.sets == null || state.legs == null, state.players)
//             return null
//         else {
//             game.Level = state.level
//             game.CheckOut = state.checkout

//             let players: IX01Player[]
//             state.players.forEach((name: string, index: number) => {
//                 let player: X01Player = new X01Player()
//                 player.Name = name
//                 player.SetsPlayed = []
//                 for (var sets = 0; sets < this.state.sets; sets++) {
//                     var set = new X01Set()
//                     for (var legs = 0; legs < this.state.legs; legs++) {
//                         set.Legs.push(new X01Leg())
//                     }
//                     player.SetsPlayed.push(set)
//                 }
//                 players.push(player)
//             })
//             game.Players = players

//             dispatch({
//                 type: START_GAME,
//             })
//         }
//     }

//     fetch("")
//         .then(() => {
//             JSON.parse(createX01TrainingGame(form).toString()).json()
//         })
//         .then(game => dispatch({
//             type: START_GAME,
//             payload: game
//         }))
// }
export const fetchListData = () => (dispatch: Dispatch) => {
    const listData = {
        "scores": maxScoresList.map((number: number, index: number) => { return (<option key={index} value={number}>{number}</option>) }) || null,
        "checkouts": checkOutList.map((number: string, index: number) => { return (<option key={index} value={number}>{number}</option>) }) || null,
        "levels": levelList.map((level: number) => { return (<option key={level + 1} value={level + 1}>Level {level + 1}</option>) }) || null,
        "sets": setList.map((set: number) => { return (<option key={set + 1} value={set + 1}>{set + 1}</option>) }) || null,
        "legs": legsList.map((leg: number) => { return (<option key={leg + 1} value={leg + 1}>{leg + 1}</option>) }) || null,
    }

    dispatch({
        type: FETCH_X01_TRAINING_DATA,
        payload: listData
    })
}
// first i should give a json object with a form to application state
// then the state should return a json object with the game
// the new component should be a game component

