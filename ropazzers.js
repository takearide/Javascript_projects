let hand = ["Rock", "Paper","Paper", "Sizzors", "Rock", "Sizzors", "Paper", "Rock", "Sizzors"]
let points = 0

function randomnumber(){
    return (Math.floor(Math.random() * 9))
}
let opponent = hand[randomnumber()]
let vs = document.getElementById('vs')
let score = document.getElementById('score') 

function display() {
    if(points === 5){
        document.querySelector('body').textContent = "You Have Won"
    } else {
        vs.textContent = opponent
        opponent = hand[randomnumber()]
    }
}

function rock() {
    if(opponent === "Sizzors"){
        points = points + 1
    } else if(opponent === "Paper") {
        points = points - 1
    } else{
        points = points 
    }
    score.textContent ="Score : " + points
    display()
}

function paper() {
    if(opponent === "Sizzors"){
        points = points - 1
    } else if(opponent === "Paper") {
        points = points
    } else{
        points = points + 1 
    }
    score.textContent ="Score : " + points
    display()
}

function sizzors() {
    if(opponent === "Sizzors"){
        points = points
    } else if(opponent === "Paper") {
        points = points + 1
    } else{
        points = points - 1 
    }
    score.textContent ="Score : " + points
    display()
}