
const text = document.getElementById('text')
const square = document.getElementById('square')
const btn = document.getElementById('btn')


if (text.value !== ""){
btn.addEventListener('click', two)
}
text.addEventListener('change', two)


function two(event) {
    console.dir(event.target.value);
    square.style.backgroundColor = event.target.value
}


const btnZhmyak = document.getElementById('e_btn')
btnZhmyak.style.display = 'none'
console.log(btnZhmyak);


const range = document.getElementById('range')
const circle = document.getElementById('circle')
const mover = function(event1){
    console.log(event1.target.value);
    circle.style.width = event1.target.value + '%'
    circle.style.height = event1.target.value + '%'
}

range.addEventListener('change', mover)
