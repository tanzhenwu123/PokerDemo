import { Deck } from "../models/deck";

const deck = new Deck()
deck.shuffle()
console.log("==========洗牌之后==========")
deck.print()
const result = deck.publish()
console.log("==========发牌之后==========")

console.log("==========玩家一==========")
result.player1.print()
console.log("==========玩家二==========")
result.player2.print()
console.log("==========玩家三==========")
result.player3.print()
console.log("==========剩余卡牌==========")
result.left.print()