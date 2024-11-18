// Sample song data
const songs = [
 {
     name: "La Intención",
     artist: "Christian Nodal x Peso Pluma ",
     img: "PespoChrisPic.jpg",
     music: "Christian Nodal, Peso Pluma - La Intención.mp3"
 },
 {
     name: "Ya No Somos Ni Seremos",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
 },

];  
const searchInput = document.getElementById("search-input");
const songList = document.getElementById("song-list");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");

// Initialize a variable to track the current audio state (playing or paused)
let isPlaying = false;
let currentSongId = null;

// Render all songs
function renderSongs(filteredSongs = songs) {
  songList.innerHTML = "";

  filteredSongs.forEach(song => {
    const songItem = document.createElement("div");
    songItem.classList.add("song-item");
    songItem.dataset.songId = song.id;
    songItem.innerHTML = `
      <img src="${song.img}" alt="${song.music}">
      <span>${song.name}-</br>${song.artist}</span>
      <button class="play-button"><i><ion-icon name="play"></ion-icon></i></button>
    `;

    songItem.querySelector(".play-button").addEventListener("click", () => {
      playOrPauseSong(song, songItem.querySelector(".play-button"));
    });

    songList.appendChild(songItem);
  });
}

// Play or pause the selected song
function playOrPauseSong(song, button) {
  if (isPlaying && currentSongId === song.id) {
    // If the song is already playing, pause it
    audioPlayer.pause();
    button.querySelector("ion-icon").setAttribute("name", "play");
    isPlaying = false;
  } else {
    // If a new song is selected or song is paused, play it
    audioSource.src = song.music;  // Update the source of the audio
    audioPlayer.load();            // Reload the audio element
    audioPlayer.play();            // Play the song
    button.querySelector("ion-icon").setAttribute("name", "pause");
    isPlaying = true;
    currentSongId = song.id;
  }
}

// Handle audio events
audioPlayer.addEventListener("ended", function() {
  // Automatically play the next song
  const currentSongIndex = songs.findIndex(song => song.id === audioSource.dataset.songId);
  const nextSongIndex = (currentSongIndex + 1) % songs.length;
  playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
});

// Initialize the app by rendering all songs
renderSongs();

// Search functionality
searchInput.addEventListener("input", function() {
  const searchQuery = searchInput.value.toLowerCase();

  // Filter songs based on the search query (case-insensitive)
  const filteredSongs = songs.filter(song => 
    song.name.toLowerCase().includes(searchQuery) || 
    song.artist.toLowerCase().includes(searchQuery)
  );

  // Render filtered songs
  renderSongs(filteredSongs);
});