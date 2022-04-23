function calculate() {
    let num = [];
    num[0] = document.getElementById('num1').value
    num[1] = document.getElementById('num2').value
        console.log(num)
    return num;
}

let answer = document.getElementById('answer')

function add(){
    let num1 = calculate()
    console.log(num1)
    let num3 = parseInt(num1[0]) + parseInt(num1[1])
    console.log(num3)
    answer.textContent = num3
}

function subtract() {
    let num = calculate()
    let num3 = num[0] - num[1]
    console.log(num3)
    answer.textContent = num3
}

function divide() {
    let num1 = calculate()
    let num3 = num1[0] / num1[1]
    console.log(num3)
    answer.textContent = num3.toFixed(3)
}

function multiply() {
    let num1 = calculate()
    let num3 = num1[0] * num1[1]
    console.log(num3)
    answer.textContent = num3
}

