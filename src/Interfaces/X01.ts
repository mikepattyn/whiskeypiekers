import { CheckOut } from "../Components/Enums/X01";

export interface IX01Set { Legs: IX01Leg[], Won: number }
export interface IX01Leg { Scores: number[], Won: number }
export interface IX01Player { Name: string, Score: number, SetsPlayed: IX01Set[] }
export interface IX01TrainingGame { Level: number, Players: IX01Player[], CheckOut: CheckOut }
export interface IX01TrainingFormState { step: number, level: number, score: number, checkout: CheckOut, sets: number, legs: number, players: string[] }