let unicorn = document.querySelector('.unicorn');
let textBox = document.querySelector('.textBox');

let star = document.createElement('i');
let x = Math.floor(Math.random()*window.innerWidth);
let duration = Math.random() * 2.5;
let h = Math.random() * 100;
let amount = 50;
let bg = document.querySelector('.bg');
let i = 0;

function stars () {
    
    while (i < amount){
        star.style.left = x + 'px';
        star.style.width = 0.5 + 'px';
        star.style.height =  5 + h + 'px';
        star.style.animationDuration = duration + 's';

        bg.appendChild(star);
        i++
    }
}

function fly () {
     unicorn.addEventListener('click', function () {
        unicorn.classList.add('fly');
    })
    textBox.addEventListener('click', function () {
        unicorn.classList.remove('fly');
    })
}


fly();
stars();
