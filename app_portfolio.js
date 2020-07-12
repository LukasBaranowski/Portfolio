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
