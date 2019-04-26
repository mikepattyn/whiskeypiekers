import { CheckOut } from "../Components/Enums/X01";

export interface IX01Set { legs: IX01Leg[], won: number }
export interface IX01Leg { scores: number[], won: number }
export interface IX01Player { name: string, score: number, setsPlayed: IX01Set[] }
export interface IX01TrainingGame { level: number, players: IX01Player[], checkOut: CheckOut }
export interface IX01TrainingFormState { step: number, level: number, score: number, checkout: CheckOut, sets: number, legs: number, players: string[] }
export interface IX01PropsForSelects { data: IX01SelectsOptionLists }
export interface IX01SelectsOptionLists { levels: JSX.Element[] | null, scores: JSX.Element[], legs: JSX.Element[], sets: JSX.Element[], checkouts: JSX.Element[] }