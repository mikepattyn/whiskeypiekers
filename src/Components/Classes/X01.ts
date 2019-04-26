import { IX01TrainingFormState, IX01Player, IX01Set, IX01Leg } from "../../Interfaces/X01";

import { CheckOut } from "../Enums/X01";

export class X01TrainingFormState implements IX01TrainingFormState {
    step: number = 1
    level: number = -1
    score: number = -1
    checkout: CheckOut = CheckOut.Double
    sets: number = -1
    legs: number = -1
    players: string[] = ["Player", "Computer"]
    constructor(step: number, level: number, score: number, checkout: CheckOut, sets: number, legs: number, player: string){
        this.step = step
        this.level = level
        this.checkout = checkout
        this.sets = sets
        this.legs = legs
    }
}

export class X01Player implements IX01Player {
    Name: string;    
    Score: number;
    RoundScores: number[];
    SetsPlayed: IX01Set[];
}

export class X01Set implements IX01Set {
    Legs: IX01Leg[];
    Won: number;
}
export class X01Leg implements IX01Leg {
    Scores: number[];
    Won: number;
}