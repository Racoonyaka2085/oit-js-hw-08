import throttle from "lodash.throttle";

const videoRef = document.querySelector('#vimeo-player');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));

const storageData = localStorage.getItem("videoplayer-current-time")

const playerTime = storageData ? JSON.parse(storageData) : { "seconds": 0 }
player.setCurrentTime(playerTime.seconds);
// seconds = the actual time that the player seeked to