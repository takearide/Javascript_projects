let count = 0;
function increment(){
    count += 1
    document.getElementById('count').textContent = count
}

function save() {
    document.getElementById('save_el').textContent += count + "  - "
    document.getElementById('count').textContent = 0
    count = 0
    console.log(count)
}


    
