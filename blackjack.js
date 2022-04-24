let cards = []
let sum = 0
let blackjack = false
let alive = false
let message = document.getElementById('message')
let dice = document.getElementById('cards')
let avl_chips = document.getElementById('avl_chips')

let player = {
    chips: 140,
    name:"Per"
}

function lost() {
    dice.textContent = "You Have Already Lost"
    cards = []
}


function randomcard(){
    let dice =  Math.floor(Math.random() * 14);
    if (dice === 1 ){
        return 11;
    } else if (dice > 10 ){
        return 10;
    } else {
        return dice
    }
}

function startgame() {
    if (player.chips === 0){
        message.textContent = "You Don't Have Enough Chips"
    }else if(blackjack === true ){
        document.querySelector('body').textContent = "You Have Won The Game! Congratulations"
    } else {
        alive = true
        let first = randomcard()
        cards.push(first)
        sum = cards[0]
        player.chips -= 20
        avl_chips.textContent = player.name + " :  $ " + player.chips
        rendergame();
    }
}

function rendergame() {
    document.getElementById('sum').textContent ="Sum : " + sum
    dice.textContent = "Cards: "
    for(let i of cards ){
        dice.textContent += i + " + "
    }
    if(sum === 21){
        message.textContent = "You've Got Blackjack! "
        blackjack = true
    } else if(sum <= 20){
        message.textContent = "Do You Want To Draw A New Card ?"
    }else {
        message.textContent = "You Have Lost"
        alive = false
    }
}
function newcard() {
    if(sum < 21){
        let card = randomcard()
        cards.push(card)
        sum += card
        rendergame()
    }else if(sum === 21){
        document.querySelector('body').textContent = "You Have Won The Game! Congratulations"
    } else {
        lost()
    }
}