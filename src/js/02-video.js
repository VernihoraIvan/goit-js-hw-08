import { galleryItems } from './gallery-items';
import Player from '@vimeo/player';
import Player from '@vimeo/player';

const videoplayer = document.querySelector('#vimeo-player');
const throttle = require('lodash.throttle');
const player = new Player(videoplayer, { id: 19231868, width: 640 });

player.on(
  'timeupdate',
  throttle(function (data) {
    let timing = data.seconds;
    console.log(data);
    try {
      localStorage.setItem('videoplayer-time', timing);
    } catch (error) {
      console.log('Sorry, we have some problems with player:', error.name);
    }
  }, 1000)
);

if (localStorage.getItem('videoplayer-time')) {
  player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-time')));
}
