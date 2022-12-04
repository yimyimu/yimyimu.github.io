import { ready } from 'https://lsong.org/scripts/dom.js';

ready(() => {
    const audio = document.querySelector('audio');
    const play = () => audio.play();
    document.addEventListener('click', play);
});