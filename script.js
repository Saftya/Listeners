
const text = document.getElementById('text')
const square = document.getElementById('square')
const btn = document.getElementById('btn')

// task1

btn.addEventListener('click', function trigger(event) {
    console.dir(event.target.value);
    square.style.backgroundColor = event.target.value
}
text.addEventListener('input', two)

function one () {
console.log('Ура!');
}

function two(event) {
    console.dir(event.target.value);
    square.style.backgroundColor = event.target.value
}



// task2
const btnZhmyak = document.getElementById('e_btn')
btnZhmyak.style.display = 'none'
console.log(btnZhmyak);

// task3
const range = document.getElementById('range')
const circle = document.getElementById('circle')
const mover = function(event1){
    console.log(event1.target.value);
    circle.style.width = event1.target.value + '%'
    circle.style.height = event1.target.value + '%'
}

range.addEventListener('change', mover)

