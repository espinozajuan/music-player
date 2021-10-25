const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: '1-love-it-if-we-made-it',
        displayName: 'Love It If We Made It',
        artist: 'The 1975',
    },
    {
        name: '2-somebody-else',
        displayName: 'Somebody Else',
        artist: 'The 1975',  
    },
    {
        name: '3-robbers',
        displayName: 'Robbers',
        artist: 'The 1975', 
    }
];

//Check if playing
let isPlaying = false;

//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}


//play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
