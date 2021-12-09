import { Color, Mark } from './enums';

export interface Card{
    getString():string
}

export interface normalCard extends Card{
    color:Color,
    mark:Mark
}

export interface Joker extends Card {
    type:"King"|"Queen"
}