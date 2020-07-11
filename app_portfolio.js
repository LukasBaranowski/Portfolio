let menuVideo = document.querySelector('.menu_video');
let menu = document.querySelector('.toggler');

function playVideo () {
    menu.addEventListener('click', () => {
        menuVideo.play();
        menuVideo.playbackRate = 3;
        menuVideo.style.zIndex = '5';
        menu.style.visibility = 'hidden';
    });
}
playVideo();
