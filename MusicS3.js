    // Initialize a list of songs with local image paths
    const songs = [
      { name: "Na Conmigo", artist: "Lapiz", url: "Lapiz Conciente - Na Conmigo.mp3", image: "LapizNaConmigoPic.jpg" },
      { name: "Ajedrez", artist: "Myke Towers", url: "Myke Towers - Ajedréz (Lyric Video) (1).mp3", image: "mykepic4.jpg" },
      { name: "Alto Riesgo", artist: "Myke towers", url: "Myke Towers - Alto Riesgo.mp3", image: "MYKEPIC3333.jpg" },
      // Add more songs as needed with corresponding image paths
    ];

    let currentSongIndex = 0; // Index of the current song playing

    // Get the elements
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songListContainer = document.getElementById('song-list');
    const playPauseBtn = document.getElementById('play-pause-btn');

    // Function to load the current song into the player
    function loadSong(song) {
      audioSource.src = song.url;
      audioPlayer.load();  // Reload the audio source
      playSong();  // Automatically start playing when a song is loaded
    }

    // Function to display the song list
    function displaySongs(songs) {
      songListContainer.innerHTML = "";  // Clear current list
      songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
          <img src="${song.image}" alt="${song.name}">  <!-- Local image path -->
          <div>
            <strong>${song.name}</strong><br>
            <small>${song.artist}</small>
          </div>
          <button onclick="selectSong(${index})">&#9654;</button>
        `;
        songListContainer.appendChild(songItem);
      });
    }

    // Function to select a song
    function selectSong(index) {
      currentSongIndex = index;
      loadSong(songs[index]);
    }

    // Search functionality
    function searchSongs() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const filteredSongs = songs.filter(song => 
        song.name.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)
      );
      displaySongs(filteredSongs);
    }

    // Function to toggle between play and pause
    function togglePlayPause() {
      if (audioPlayer.paused) {
        playSong();
      } else {
        pausedSong();
      }
    }

    // Play the current song
    function playSong() {
      audioPlayer.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;";  // Change button to pause icon (II)
    }

    // Pause the current song
    function pausedSong() {
      audioPlayer.pause();
      playPauseBtn.innerHTML = "&#9654;";  // Change button to play icon (▶)
    }

    // Play the previous song
    function prevSong() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;  // Wrap around
      loadSong(songs[currentSongIndex]);
    }

    // Play the next song
    function nextSong() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;  // Wrap around
      loadSong(songs[currentSongIndex]);
    }

    // Play a random song
    function randomPlay() {
      const randomIndex = Math.floor(Math.random() * songs.length);
      currentSongIndex = randomIndex; // Update the current song index
      loadSong(songs[randomIndex]);
    }

    // Automatically play the next song when the current one ends
    audioPlayer.addEventListener('ended', nextSong);

    // Initial display of all songs
    displaySongs(songs);
  