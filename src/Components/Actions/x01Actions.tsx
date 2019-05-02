import { Dispatch } from "redux";
import { START_GAME } from "./types";
import { X01TrainingFormState } from "../Classes/X01";

export const startX01Training = (form: X01TrainingFormState) => (dispatch: Dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }}).then(() => dispatch({
            type: START_GAME,
            payload: form
        }))
    
}
// first i should give a json object with a form to application state
// then the state should return a json object with the game
// the new component should be a game component
// export const startX01Training = (postData: X01TrainingFormState) => (dispatch: Dispatch) => {
//     const game: IX01TrainingGame = new X01TrainingGame()
//     game.level = postData.level
//     game.checkout = postData.checkout + 1
//     game.players = []
//     for (var i = 0; i < postData.players.length; i++) {
//         game.players.push({
//             name: postData.players[i],
//             score: postData.score,
//             setsPlayed: []
//         })
//         for (var set = 0; set < Number(postData.sets); set++) {
//             game.players[i].setsPlayed.push({
//                 legs: [],
//                 won: 0
//             })
//             for (var legs = 0; legs < Number(postData.legs); legs++) {
//                 game.players[i].setsPlayed[set].legs.push({
//                     scores: [],
//                     won: 0
//                 })
//             }
//         }
//     }
//     console.log(game)
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     })
//         .then(() => dispatch({
//             type: START_GAME,
//             payload: game
//         })
//         )
// }
