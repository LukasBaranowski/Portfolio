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
