const songs = [ 
    {   id: 1,
        name: "Na Conmigo",
        artist: "Lapiz Conciente",
        img: "LapizNaConmigoPic.jpg",
        music: "Lapiz Conciente - Na Conmigo.mp3"
    },
    {   id: 2,
        name: "TOUCHDOWN",
        artist: "Messiah x Myke Towers",
        img: "MessiahMikeTouchDownPic.jpg",
        music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
    },
    {   id: 3,
        name: "CURIANA",
        artist: "El Poeta x CarlosCoins",
        img: "PoetaCarlosCurianaPic.jpg",
        music: "El Poeta, @CarlosCoins - Curiana.mp3"
    },
    {   id: 4,
        name: "Pila De Cotorra",
        artist: "El Fother x Darlyn Nay",
        img: "FotherDarlinPilaDeCotorraPic.jpg",
        music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
    },
    {   id: 5,
        name: "Astronauto",
        artist: "Almighty",
        img: "AlmightyPicx.jpg",
        music: "Almighty- Astronauto.mp3"
    },
    {   id: 6,
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        img: "ninoyomelPic.jpg",
        music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {   id: 7,
        name: "SEDA",
        artist: "Bad Bunny x Bryant Myers",
        img: "BadBunnyBryinSedaPic.jpg",
        music: "Bad Bunny, Bryant Myers - Seda.mp3"
    },
    {   id: 8,
        name: "SASA O DINERO",
        artist: "BRAULIO FOGON",
        img: "BraulioFogonPic.jpg",
        music: "BRAULIO FOGON - SASA O DINERO.mp3"
    },
    {   id: 9,
        name: "No Soy Mujeriego",
        artist: "Nino Freestyle",
        img: "NinoFreestylePic.avif",
        music: "Nino Freestyle - No Soy Mujeriego.mp3"
    },
    {   id: 10,
        name: "ORGANICO",
        artist: "Jamby El Favo",
        img: "JambyOrganicoPic.jpg",
        music: "Jamby El Favo - Orgánico.mp3"
    },

 ];
 
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
     songList.innerHTML = "";
 
     filteredSongs.forEach(song => {
         const songItem = document.createElement("div");
         songItem.classList.add("song-item");
         songItem.dataset.songId = song.id;
         songItem.innerHTML = `
             <img src="${song.img}" alt="${song.name}">
             <span>${song.name} - ${song.artist}</span>
             <button class="play-button"><i class="fas fa-play"></i></button>
         `;
 
         const playButton = songItem.querySelector(".play-button");
         playButton.addEventListener("click", () => {
             playOrPauseSong(song, playButton);
         });
 
         songList.appendChild(songItem);
     });
 }
 
 function playOrPauseSong(song, button) {
     if (isPlaying && currentSongId === song.id) {
         audioPlayer.pause();
         button.querySelector("i").classList.replace("fa-pause", "fa-play");
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         audioSource.src = song.music;
         audioSource.dataset.songId = song.id;
         audioPlayer.load();
         audioPlayer.play();
         button.querySelector("i").classList.replace("fa-play", "fa-pause");
         playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
         isPlaying = true;
         currentSongId = song.id;
     }
 }
 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });



// Repeat button functionality
const repeatButton = document.getElementById("repeat-button");
let isRepeatActive = false; // Track repeat mode state

repeatButton.addEventListener("click", () => {
    isRepeatActive = !isRepeatActive; // Toggle repeat mode

    // Toggle active class for repeat button
    if (isRepeatActive) {
        repeatButton.classList.add("active");
    } else {
        repeatButton.classList.remove("active");
    }
});

// Handle when the song ends and repeat mode is active
audioPlayer.addEventListener("ended", function() {
    if (isRepeatActive) {
        // Restart the current song from the beginning
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        // Play the next song if repeat is not active
        const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
        const nextSongIndex = (currentSongIndex + 1) % songs.length;
        playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
    }
});

