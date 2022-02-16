const playBtn = document.querySelector('.play')
const forwardFirst = document.querySelector('.forward-left');
const forwardSec = document.querySelector('.forward-right');
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('.song');
const sing = document.querySelector('.singer');
const background = document.querySelector('.background');
const image = document.querySelector('.image');
const player = document.querySelector('.player');
const current = document.querySelector('.current');
const duration = document.querySelector('.duration');
const songs = ['SICKO MODE','Juicy','Gimme Love'];
const singers = ['Travis Scott', 'Doja Cat', 'Joji']

let songIndex = 0;



function loadSong(song){ 
    title.innerHTML = songs[songIndex];
    sing.innerHTML = singers[songIndex]
audio.src = `audio/${song}.mp3`;
image.src= `images/img${songIndex + 1}.jpg`;
background.src= `images/bck${songIndex + 1}.jpg`;
}





function playSong(){
    player.classList.add('btn-play');
    playBtn.src = 'images/pause.png';
    audio.play();
}

function pauseSong(){
    player.classList.remove('btn-play');
    playBtn.src = 'images/play.png';
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('btn-play')
    if (isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

function nextSong(){
songIndex++;
if(songIndex > 2){
    songIndex = 0;
}
loadSong(songs[songIndex])
playSong()
}
forwardSec.addEventListener('click',nextSong)



function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = 2
    }
    loadSong(songs[songIndex])
playSong()
}
forwardFirst.addEventListener('click',prevSong)



function updateProgress(event){
const {duration,currentTime} = event.srcElement
const progressPercent = ( currentTime / duration) * 100;
progress.style.width = `${progressPercent}%`

}
audio.addEventListener('timeupdate',updateProgress)

function setProgress(event){
const width = this.clientWidth
const clickX = event.offsetX
const duration = audio.duration
audio.currentTime = (clickX/width) * duration
}
progressContainer.addEventListener('click',setProgress)

function seektimeupdate(){
    if(audio.duration){
        let nt = audio.currentTime * (100 / audio.duration);
        progressContainer.value = nt;
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if(cursecs<10){cursecs = "0" + cursecs}
        if(dursecs<10){dursecs = "0" + dursecs}
        if(curmins<10){curmins = "0" + curmins}
        if(dursecs<10){dursecs = "0" + dursecs}
        current.innerHTML = curmins + ":"+cursecs;
        duration.innerHTML = durmins + ":" + dursecs;}
     else{
         current.innerHTML = "00"+":"+"00";
         duration.innerHTML = "00"+":"+"00";
     }   
    }
audio.addEventListener("timeupdate",function(){seektimeupdate()})