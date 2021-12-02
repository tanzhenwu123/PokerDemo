import { Color, Mark } from './enums';
import { Deck, Joker, normalCard } from './types';


export function createDeck():Deck{
    let deck:Deck = [],
    color = Object.values(Color),
    mark = Object.values(Mark);
    for(let i of mark){
        for(let j of color){
            const card:normalCard = {
                color:j,
                mark:i,
                getString(){
                    return this.color + this.mark
                }
            }
            deck.push(card)
        }
    }
    let result:Joker = {
        type:"King",
        getString(){
            return 'King'
        }
    }
    deck.push(result)
    result = {
        type:'Queen',
        getString(){
            return 'Queen'
        }
    }
    deck.push(result)
    return deck
}

export function printDeck(deck:Deck){
    let result = "\n"
    deck.forEach((e,i) =>{
        result += e.getString() + '\t';
        if((i + 1) % 4 == 0) result += '\n'
    })
    console.log(result)
}