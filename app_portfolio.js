let menuVideo = document.querySelector('.menu_video');
let menu = document.querySelector('.toggler');

function playVideo () {
    menu.addEventListener('click', () => {
        menuVideo.play();
        menuVideo.style.zIndex = '1';
        menu.style.visibility = 'hidden';
    });
}
playVideo();
