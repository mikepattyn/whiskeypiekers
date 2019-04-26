import { START_GAME, FETCH_X01_TRAINING_DATA } from "../Actions/types";

const initialX01TrainingGameState = {
    game: {},
    listData: {}
}

export default function X01TrainingGameReducer(state = initialX01TrainingGameState, action: any){
    switch(action.type){
        case START_GAME: 
            return {...state, game: action.payload }
        case FETCH_X01_TRAINING_DATA: 
            return {...state, listData: action.payload}
        default: 
            return state
    }
}