import { START_GAME } from "../Actions/types";

const initialState = {
    game: {}
}

export default function X01TrainingGameReducer(state = initialState, action: any){
    switch(action.type){
        case START_GAME:
            return {...state, game: action.payload}
        default: 
            return state
    }
}