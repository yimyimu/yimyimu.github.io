import { ready } from 'https://lsong.org/scripts/dom.js';

ready(() => {
    const audio = new Audio();
    audio.autoplay = true;
    audio.src = "./coin.mp3";
    const play = () => audio.play();
    audio.addEventListener('canplay', () => {
        console.log("canplay");
    });
    document.addEventListener('click', play);
});