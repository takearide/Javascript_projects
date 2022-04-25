let total = 0
let count = 0;
function increment(){
    count += 1
    document.getElementById('count').textContent = count
}
function decrement() {
    count -= 1
    document.getElementById('count').textContent = count 
}

function save() {
    document.getElementById('save_el').textContent += count + "  - "
    document.getElementById('count').textContent = 0
    sum()
    count = 0
}
function sum() {
    total += count
    console.log(total)
}
function displaysum() {
    document.getElementById('displaysum').textContent ="Total People Entered Today : " + total
}

    
