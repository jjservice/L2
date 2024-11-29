const songs = [ 
    {
        "id": 1,
        "name": "It Is What It Is",
        "artist": "Big Sean x Gunna",
        "img": "BigSeanGunnaItisWhatItIsPic.jpg",
        "music": "Big Sean  x Gunna - It Is What It Is.mp3"
    },
    {
        "id": 2,
        "name": "Lost The Love",
        "artist": "BigXthaPlug",
        "img": "BigxLastPic.jpg",
        "music": "BigXthaPlug - Lost The Love.mp3"
    },
    {
        "id": 3,
        "name": "We Set The Trends",
        "artist": "Jim Jones x Migos",
        "img": "MiigosJimTrendPic.jpg",
        "music": "Jim Jones, Migos - We Set The Trends.mp3"
    },
    {
        "id": 4,
        "name": "Good Drank",
        "artist": "2 Chainz ft Quavo, Gucci Mane",
        "img": "2chainGodDrunkPic.jpg",
        "music": "2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3"
    },
    {
        "id": 5,
        "name": "Sacrifices",
        "artist": "Big Sean x Migos",
        "img": "SacrificesmigosBIgseanPic.jpg",
        "music": "Big Sean - Sacrifices ft. Migos.mp3"
    },
    {
        "id": 6,
        "name": "Diet Coke",
        "artist": "Pusha T",
        "img": "PushaTPic.jpg",
        "music": "Pusha T - Diet Coke.mp3"
    },
    {
        "id": 7,
        "name": "Mama Told Me",
        "artist": "Tory Lanez",
        "img": "ToryLanezPic.jpg",
        "music": "Tory Lanez - Mama Told Me.mp3"
    },
    {
        "id": 8,
        "name": "Quality Control",
        "artist": "Migos x Eurielle",
        "img": "MigosPic1.jpg",
        "music": "Quality Control - Too Hotty by Migos featuring Eurielle.mp3"
    },
    {
        "id": 9,
        "name": "Law & Order",
        "artist": "BigXthaPlug",
        "img": "BigXLawOrderPic.jpg",
        "music": "BigXthaPlug - Law & Order.mp3"
    },
    {
        "id": 10,
        "name": "Pack Ya Bags",
        "artist": "Rick Ross x Meek Mill x Wale",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross & 2 Chainz - Pack Ya Bags ft. Wale 2024.mp3"
    },
    {
        "id": 11,
        "name": "They Don't Really Love You",
        "artist": "Rick Ross x Meek Mill",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross, Meek Mill - They Don't Really Love You.mp3"
    },
    {
        "id": 12,
        "name": "The Godfather",
        "artist": "Tory Lanez",
        "img": "ToryLanezPic.jpg",
        "music": "Tory Lanez - The Godfather.mp3"
    },
    {
        "id": 13,
        "name": "The Largest",
        "artist": "BigXThaPlug",
        "img": "BigXTheLargestPic.jpg",
        "music": "BigXthaPlug - The Largest.mp3"
    },
    {
        "id": 14,
        "name": "Iconic",
        "artist": "Rick Ross x Meek Mill",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross, Meek Mill - Iconic.mp3"
    },
    {
        "id": 15,
        "name": "Whip It",
        "artist": "BigXThaPlug",
        "img": "BigXThatPlug11111.jpg",
        "music": "BigXthaPlug - Whip It (Official Audio).mp3"
    },
    {
        "id": 16,
        "name": "Fight Night",
        "artist": "Migos",
        "img": "MigosPic1.jpg",
        "music": "Migos - Fight Night.mp3"
    },
    {
        "id": 17,
        "name": "Back on my Bs",
        "artist": "BigXthaPlug",
        "img": "backbspic.jpg",
        "music": "BigXthaPlug - Back On My BS [Official Lyric Video].mp3"
    },
    {
        "id": 18,
        "name": "Million Dollar Baby",
        "artist": "Tommy Richman",
        "img": "milliondollarpic.jpg",
        "music": "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
    },
    {
        "id": 19,
        "name": "800 Karats",
        "artist": "Rick Ross x Meek Mill",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross, Meek Mill - 800 Karats.mp3"
    },
    {
        "id": 20,
        "name": "Need It",
        "artist": "Migos ft. YoungBoy Never Broke Again",
        "img": "MigosIneedItPic.jpg",
        "music": "Migos ft. YoungBoy Never Broke Again - Need It.mp3"
    },
    {
        "id": 21,
        "name": "Lyrical Eazy",
        "artist": "Rick Ross x Meek Mill",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross & Meek Mill - Lyrical Eazy.mp3"
    },
    {
        "id": 22,
        "name": "Dope Boy",
        "artist": "Young Thug x Nigo",
        "img": "YoungThughNigoDopeBoyPic.jpg",
        "music": "Young Thug, Nigo - Dope Boy.mp3"
    },
    {
        "id": 23,
        "name": "Take Care",
        "artist": "BigXthaPlug",
        "img": "BigxLastPic.jpg",
        "music": "BigXthaPlug - Take Care.mp3"
    },
    {
        "id": 24,
        "name": "Star Island",
        "artist": "Rick Ross x Meek Mill",
        "img": "RickMeekTooGoodTobeTruePic.jpg",
        "music": "Rick Ross, Meek Mill - Star Island.mp3"
    },
    {
        "id": 25,
        "name": "Luv Again",
        "artist": "Ruger",
        "img": "RugerLuvAgainPic.jpg",
        "music": "Ruger - Luv Again.mp3"
    },
    {
        "id": 26,
        "name": "Change Me",
        "artist": "BigXthaPlug",
        "img": "BigXcHangeMePic.jpg",
        "music": "BigXthaPlug - Change Me.mp3"
    },
    {
        "id": 27,
        "name": "Big Stepper",
        "artist": "BigXThaPlug",
        "img": "BigXThatPlug11111.jpg",
        "music": "BigXThaPlug - Big Stepper.mp3"
    },
    {
        "id": 28,
        "name": "I Get The Bag",
        "artist": "Gucci Mane ft Migos",
        "img": "IgetThebagPic.jpg",
        "music": "Gucci Mane ft Migos - I Get The Bag [Audio].mp3"
    },
    {
        "id": 29,
        "name": "PLAIN JANE",
        "artist": "A$AP Ferg",
        "img": "AsaFergPic.jpg",
        "music": "A$AP Ferg - Plain Jane.mp3"
    },
    {
        "id": 30,
        "name": "Emotionally Scarred",
        "artist": "Lil Baby",
        "img": "LilBbayPic2.webp",
        "music": "Lil Baby - Emotionally Scarred.mp3"
    },
    {
        "id": 31,
        "name": "Rap Niggas",
        "artist": "BigXthaPlug",
        "img": "BigXThatPlug11111.jpg",
        "music": "BigXthaPlug - Rap Niggas.mp3"
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
    // Get the song image element by ID
    const songImageDisplay = document.getElementById("current-song-image");

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

    // Update the current song name display
    const songNameDisplay = document.getElementById("current-song-name");
    songNameDisplay.textContent = song.name;
    
    // Update the current artist name display
    const artistNameDisplay = document.getElementById("current-artist-name");
    artistNameDisplay.textContent = song.artist; // Display the artist name
    
    // Update the current song ID display
    const idNumberDisplay = document.getElementById("current-id");
    idNumberDisplay.textContent = song.id; // Display the song ID

    // Update the song image
    songImageDisplay.src = song.img; // Set the image source to the song's image
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

 ///voice search ///
 const voiceSearchButton = document.getElementById("voice-search-button");

// Check if the SpeechRecognition API is available
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "es-ES"; // Set language for recognition (you can change this to other languages)
    recognition.continuous = false; // Only listen for a single command
    recognition.interimResults = false; // No need for interim results

    // Function to start the voice recognition when the button is clicked
    voiceSearchButton.addEventListener("click", () => {
        recognition.start();
    });

    // Handle the speech recognition result
    recognition.addEventListener("result", (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
        searchInput.value = transcript; // Set the search input to the recognized speech

        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );

        renderSongs(filteredSongs); // Render the filtered song list
    });

    // Handle speech recognition errors
    recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error:", event.error);
    });

    // Optionally, handle the end of recognition
    recognition.addEventListener("end", () => {
        console.log("Voice search ended");
    });
} else {
    console.error("Sorry, Lollita can not recognized your voice");
}

// Assuming you already have the following in your HTML:
// <audio id="notification-sound" src="notification.mp3" preload="auto"></audio>

const notificationSound = document.getElementById("notification-sound");

// Voice search event listener for recognition result
recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
    searchInput.value = transcript; // Set the search input to the recognized speech

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list

    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

// Optional: Handle other events like error and end if you want to give feedback for those situations
recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error:", event.error);
});

// Optional: Handle end of recognition event
recognition.addEventListener("end", () => {
    console.log("Voice search ended");
});


recognition.addEventListener("result", (event) => {
    // Get the transcript from the speech recognition result
    let transcript = event.results[0][0].transcript.toLowerCase();

    // Remove the period at the end of the text if it exists
    if (transcript.endsWith(".")) {
        transcript = transcript.slice(0, -1); // Remove the last character (the period)
    }

    // Set the search input to the recognized speech (without period)
    searchInput.value = transcript;

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list

    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }
