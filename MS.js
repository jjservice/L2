const songs = [
   { id: 1, name: "Na Conmigo", artist: "Lapiz Conciente", img: "LapizNaConmigoPic.jpg", music: "Lapiz Conciente - Na Conmigo.mp3" },
   { id: 2, name: "TOUCHDOWN", artist: "Messiah x Myke Towers", img: "MessiahMikeTouchDownPic.jpg", music: "Messiah, Myke Towers - TOUCHDOWN.mp3" },
   { id: 3, name: "CURIANA", artist: "El Poeta x CarlosCoins", img: "PoetaCarlosCurianaPic.jpg", music: "El Poeta, @CarlosCoins - Curiana.mp3" },
   { id: 4, name: "Pila De Cotorra", artist: "El Fother x Darlyn Nay", img: "FotherDarlinPilaDeCotorraPic.jpg", music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3" },
   { id: 5, name: "Astronauto", artist: "Almighty", img: "AlmightyPicx.jpg", music: "Almighty- Astronauto.mp3" },
   { id: 6, name: "Que Loquera", artist: "Nino Freestyle x Yomel El Meloso", img: "ninoyomelPic.jpg", music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3" },
   { id: 7, name: "SEDA", artist: "Bad Bunny x Bryant Myers", img: "BadBunnyBryinSedaPic.jpg", music: "Bad Bunny, Bryant Myers - Seda.mp3" },
   { id: 8, name: "SASA O DINERO", artist: "BRAULIO FOGON", img: "BraulioFogonPic.jpg", music: "BRAULIO FOGON - SASA O DINERO.mp3" },
   { id: 9, name: "No Soy Mujeriego", artist: "Nino Freestyle", img: "NinoFreestylePic.avif", music: "Nino Freestyle - No Soy Mujeriego.mp3" },
   { id: 10, name: "ORGANICO", artist: "Jamby El Favo", img: "JambyOrganicoPic.jpg", music: "Jamby El Favo - Orgánico.mp3" }
];

const searchInput = document.getElementById("search-input");
const songList = document.getElementById("song-list");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const randomButton = document.getElementById("random-button");

const volumeSlider = document.getElementById("volume-slider");
const volumePercentage = document.getElementById("volume-percentage");

let isPlaying = false;
let currentSongId = null;

// Volume control initialization
volumeSlider.addEventListener("input", function() {
   const volume = volumeSlider.value;
   audioPlayer.volume = volume;
   volumePercentage.textContent = `${Math.round(volume * 100)}%`;
});

audioPlayer.volume = volumeSlider.value;  // Set initial volume

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
