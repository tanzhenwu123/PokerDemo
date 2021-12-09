import { Color, Mark } from "./enums";
import { Card, Joker, normalCard } from "./types";

interface PublishResult{
    player1:Deck,
    player2:Deck,
    player3:Deck,
    left:Deck
}

export class Deck{
    cards:Card[] = []

    constructor(cards?:Card[]){
        if(cards) this.cards = cards
        else this.init()
    }

    private init(){
        const mark = Object.values(Mark);
        const color = Object.values(Color);
        for(let i of mark){
            for(let j of color){
                const card:normalCard = {
                    color:j,
                    mark:i,
                    getString(){
                        return this.color + this.mark
                    }
                }
                this.cards.push(card)
            }
        }
        let joker:Joker = {
            type:"King",
            getString(){
                return "KING"
            }
        }
        this.cards.push(joker)
        joker = {
            type:"Queen",
            getString(){
                return "QUUEN"
            }
        }
        this.cards.push(joker)
    }

    print(){
        let result = "\n"
        this.cards.forEach((e,i)=>{
            result += e.getString() + '\t'
            if((i+1) % 6 == 0) result += "\n"
        })
        console.log(result)
    }
    // 洗牌
    shuffle(){
        for(let i = 0 ; i < this.cards.length; i++){
            const targetIndex = this.getRandom(0,this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[targetIndex]
            this.cards[targetIndex] = temp
        }
    }

    // 发完牌后，得到4个card数组 返回值为元组
    publish():PublishResult{
        let player1:Deck,
        player2:Deck,
        player3:Deck,
        left:Deck;
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    // 发多少张牌
    private takeCards(n:number):Deck{
        const result :Card[] = []
        for(let i = 0 ; i < n; i++){
            result.push(this.cards.shift() as Card)
        }
        return new Deck(result)
    }

    // 生成随机下标 牌组随机排序
    private getRandom(min:number,max:number){
        const dec = max - min;
        return Math.floor(Math.random() * dec + min)
    }
}