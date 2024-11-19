const songs = [
    { id: 1, name: "Na Conmigo", artist: "Lapiz Conciente", img: "LapizNaConmigoPic.jpg", music: "Lapiz Conciente - Na Conmigo.mp3" },
    { id: 2, name: "TOUCHDOWN", artist: "Messiah x Myke Towers", img: "MessiahMikeTouchDownPic.jpg", music: "Messiah, Myke Towers - TOUCHDOWN.mp3" },
    { id: 3, name: "CURIANA", artist: "El Poeta x CarlosCoins", img: "PoetaCarlosCurianaPic.jpg", music: "El Poeta, @CarlosCoins - Curiana.mp3" },
    { id: 4, name: "MI Mamá Me Apunto En la Escuela", artist: "Sujeto Oro 24", img: "SUJETOPIC3333.jpg", music: "Sujeto Oro 24 - MI Mamá Me Apunto En la Escuela.mp3" }
 ];
 
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 
 let isPlaying = false;
 let currentSongId = null;
 
 function renderSongs(filteredSongs = songs) {
    songList.innerHTML = "";
 
    filteredSongs.forEach(song => {
       const songItem = document.createElement("div");
       songItem.classList.add("song-item");
       songItem.dataset.songId = song.id;
       songItem.innerHTML = `
          <img src="${song.img}" alt="${song.name}">
          <span>${song.name} - ${song.artist}</span>
          <button class="play-button"><i><ion-icon name="play"></ion-icon></i></button>
       `;
 
       songItem.querySelector(".play-button").addEventListener("click", () => {
          playOrPauseSong(song, songItem.querySelector(".play-button"));
       });
 
       songList.appendChild(songItem);
    });
 }
 
 function playOrPauseSong(song, button) {
    if (isPlaying && currentSongId === song.id) {
       audioPlayer.pause();
       button.querySelector("ion-icon").setAttribute("name", "play");
       isPlaying = false;
    } else {
       audioSource.src = song.music;
       audioSource.dataset.songId = song.id;
       audioPlayer.load();
       audioPlayer.play();
       button.querySelector("ion-icon").setAttribute("name", "pause");
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
 
 // Event listeners for buttons
 nextButton.addEventListener("click", playNextSong);
 prevButton.addEventListener("click", playPrevSong);
 randomButton.addEventListener("click", playRandomSong);
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
    const searchQuery = searchInput.value.toLowerCase();
 
    const filteredSongs = songs.filter(song =>
       song.name.toLowerCase().includes(searchQuery) ||
       song.artist.toLowerCase().includes(searchQuery)
    );
 
    renderSongs(filteredSongs);
 });
 