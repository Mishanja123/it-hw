import Player from "@vimeo/player"
// import throttle from 'lodash.throttle';

const CURRENTTIME = "videoplayer-current-time"

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    setTime()
    const onPlay = function (data) {

      localStorage.setItem(CURRENTTIME ,data.seconds)
    };

player.on('timeupdate', throttle(onPlay, 1000) );

function setTime() {
  if (localStorage.getItem(CURRENTTIME) !== null) {
    player.setCurrentTime(localStorage.getItem(CURRENTTIME))
  }
}
