let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "It's Always Blue - Ligion", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "TRAP cartel", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "They Mad", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Rich the Kid", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Song Title", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "The Safety Dance", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Back It Up", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Love me Let You", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Let Me Love You", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "True Love", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "It's Always Blue - Ligion", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "TRAP cartel", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "They Mad", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Rich the Kid", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Song Title", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "The Safety Dance", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Back It Up", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Love me Let You", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Let Me Love You", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "True Love", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" }
];

const container = document.querySelector('.songItemContainer');
songs.forEach((song, index) => {
    container.innerHTML += `
        <div class="songList">
            <img src="${song.coverPath}" alt="cover">
            <span class="songName">${song.songName}</span>
            <span class="songListPlay">
                <span class="timestamp">3:00</span>
                <i id="${index}" class="far songItemPlay fa-play-circle"></i>
            </span>
        </div>
    `;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

document.querySelectorAll('.songItemPlay').forEach(item => {
    item.addEventListener('click', e => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
















