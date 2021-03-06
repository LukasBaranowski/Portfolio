//Stars animation
function stars () {
    const amount = 50;
    const bg = document.querySelector('.bg');
    let i = 0;
    while (i < amount){
        const star = document.createElement('i');
        const x = Math.floor(Math.random()*window.innerWidth);

        const duration = Math.random() * 2.5;
        const h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 0.5 + 'px';
        star.style.height =  5 + h + 'px';
        star.style.animationDuration = duration + 's';

        bg.appendChild(star);
        i++
    }
}
stars()

//Fly animation
let unicorn = document.querySelector('.unicorn');
let textBox = document.querySelector('.textBox');
function fly () {
     unicorn.addEventListener('click', function () {
        unicorn.classList.add('fly');
    })
    textBox.addEventListener('click', function () {
        unicorn.classList.remove('fly');
    })
}
fly();

//Menu Video
let menuVideo = document.querySelector('.menu_video');
let menu = document.querySelector('.toggler');
let burger = document.querySelector('.burger');

function playVideo () {
    menu.addEventListener('click', () => {
        menuVideo.play();
        menuVideo.playbackRate = 3;
        menuVideo.style.zIndex = '5';
        burger.style.visibility = 'hidden';
    });
}
playVideo();

//Refresh the screen when going back from other page
window.addEventListener( "pageshow", function (e) {
    let refreshScreen = e.persisted || 
                        ( typeof window.performance != "undefined" && 
                            window.performance.navigation.type === 2 );
    if ( refreshScreen ) {
      // Handle page restore.
      window.location.reload();
    }
  });
