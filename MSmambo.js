const songs = [ 
    {
        "id": 1,
        "name": "A CUALTA MI GATA",
        "artist": "Omega El Fuerte",
        "img": "omegapic.jpg",
        "music": "Omega-A Cualta Mi Gata.mp3"
    },
    {
        "id": 2,
        "name": "Con Quién Te Olvido",
        "artist": "Ala Jaza",
        "img": "ALAJAPICCCC.jpg",
        "music": "Ala Jaza - Con Quién Te Olvido.mp3"
    },
    {
        "id": 3,
        "name": "LA NOTA",
        "artist": "GABRIEL PAGAN x OMEGA",
        "img": "GABRIELOMEGAPIC.jpg",
        "music": "GABRIEL PAGAN  OMEGA - LA NOTA.mp3"
    },
    {
        "id": 4,
        "name": "Si antes te hubiera conocido",
        "artist": "Karol G",
        "img": "MECUROPIC.jpg",
        "music": "KAROL G - Si Antes Te Hubiera Conocido.mp3"
    },
    {
        "id": 5,
        "name": "EL MERENGUE",
        "artist": "Marshmello x Manuel Turizo",
        "img": "ManuelTurizoMerenguwPic.jpg",
        "music": "Marshmello, Manuel Turizo - El Merengue.mp3"
    },
    {
        "id": 6,
        "name": "Tu Mayimbe",
        "artist": "Sujeto Oro 24",
        "img": "SUJETOPIC3333.jpg",
        "music": "sujeto Oro 24 - Tu Mayimbe.mp3"
    },
    {
        "id": 7,
        "name": "Vieja Dale Dale",
        "artist": "Toño Rosario",
        "img": "TonoRosariPic.jpg",
        "music": "Toño Rosario - Vieja Dale Dale.mp3"
    },
    {
        "id": 8,
        "name": "PEPAS",
        "artist": "Ala Jaza",
        "img": "ALAJAZApIC3333.jpg",
        "music": "ALAJAZA-PEPAS.mp3"
    },
    {
        "id": 9,
        "name": "To' la Mujeres Rapan",
        "artist": "Amarfis Y la banda de Atakke",
        "img": "AmarfisPic1.jpg",
        "music": "Amarfis Y la banda de Atakke-To' la Mujeres Rapan.mp3"
    },
    {
        "id": 10,
        "name": "Mi Forma De Ser",
        "artist": "Ala Jaza",
        "img": "ALAJAPICCCC.jpg",
        "music": "Ala Jaza - Mi Forma De Ser.mp3"
    },
    {
        "id": 11,
        "name": "No me hable de Gente",
        "artist": "Sujeto Oro 24",
        "img": "SUJETOPIC3333.jpg",
        "music": "Sujeto Oro 24 - No me hable de Gente.mp3"
    },
    {
        "id": 12,
        "name": "Simplemente Gracias",
        "artist": "Ala Jaza",
        "img": "ALAJAPICCCC.jpg",
        "music": "Ala Jaza - Simplemente Gracias.mp3"
    },
    {
        "id": 13,
        "name": "HEAVY",
        "artist": "Sujeto Oro 24",
        "img": "SUJETOPICCCC222222.jpg",
        "music": "Sujeto oro 24 - Heavy.mp3"
    },
    {
        "id": 14,
        "name": "Yo Quiero Un Vacilon",
        "artist": "Toño Rosario",
        "img": "TonoRosariPic.jpg",
        "music": "Yo Quiero Un Vacilon.mp3"
    },
    {
        "id": 15,
        "name": "El Guayo",
        "artist": "Amarfis y la banda de Atakke",
        "img": "amarfispic222.jpg",
        "music": "Amarfis y la banda de Atakke-El Guayo.mp3"
    },
    {
        "id": 16,
        "name": "Mi Mundo Lo Controlo Yo",
        "artist": "Sujeto Oro 24",
        "img": "SujetoMimundoPic.jpg",
        "music": "Sujeto Oro 24  -  Mi Mundo Lo Controlo Yo.mp3"
    },
    {
        "id": 17,
        "name": "Ando En La Versace",
        "artist": "Omega El Fuerte",
        "img": "omegapic.jpg",
        "music": "Omega El  Fuerte-Ando En La Versace.mp3"
    },
    {
        "id": 18,
        "name": "BOBO",
        "artist": "Sujeto",
        "img": "sujetoPic.jpg",
        "music": "SUJETO ORO 24 - BOBO.mp3"
    },
    {
        "id": 19,
        "name": "Nadie Se Meta",
        "artist": "Ala Jaza",
        "img": "ALAJAPICCCC.jpg",
        "music": "Ala Jaza - Nadie Se Meta.mp3"
    },
    {
        "id": 20,
        "name": "Toma Lo Que Te Mandé",
        "artist": "Toño Rosario",
        "img": "TonoRosariPic.jpg",
        "music": "Toño Rosario - Toma Lo Que Te Mandé.mp3"
    },
    {
        "id": 21,
        "name": "El Vecino",
        "artist": "Sujeto oro 24",
        "img": "SUJETOPICCCC222222.jpg",
        "music": "Sujeto oro 24-El Vecino.mp3"
    },
    {
        "id": 22,
        "name": "Fariseo",
        "artist": "Omega El Fuerte",
        "img": "omegapic2.jpg",
        "music": "Omaga El Fuerte-Fariseo.mp3"
    },
    {
        "id": 23,
        "name": "SUJETO ORO 24",
        "artist": "CUIDATE",
        "img": "sujetocuidatepiiccc.jpg",
        "music": "SUJETO ORO 24 - CUIDATE.mp3"
    },
    {
        "id": 24,
        "name": "El Pollo",
        "artist": "Amarfis y la banda de Atakke",
        "img": "AmarfisPic1.jpg",
        "music": "Amarfis y la banda de Atakee-El Pollo.mp3"
    },
    {
        "id": 25,
        "name": "NO ME HABLEN DE ELLA",
        "artist": "SUJETO 0R0 24",
        "img": "SUJETOPIC3333.jpg",
        "music": "SUJETO 0R0 24 - NO ME HABLEN DE ELLA.mp3"
    },
    {
        "id": 26,
        "name": "Yemaya",
        "artist": "Amarfis Y la banda de Atakke",
        "img": "amarfispic333.jpg",
        "music": "Amarfis Y la banda de Atakke-Yemaya.mp3"
    },
    {
        "id": 27,
        "name": "TU NO CORRE",
        "artist": "SUJETO ORO 24",
        "img": "SUJETOPICCCC222222.jpg",
        "music": "TU NO CORRE - SUJETO ORO 24.mp3"
    },
    {
        "id": 28,
        "name": "ME VOY PAL PUEBLO",
        "artist": "Toño Rosario",
        "img": "TONOPIC2222.jpg",
        "music": "Toño Rosario - ME VOY PAL PUEBLO.mp3"
    },
    {
        "id": 29,
        "name": "Misericordia",
        "artist": "Ala Jaza",
        "img": "alajazapic222.jpg",
        "music": "Ala Jaza - Misericordia.mp3"
    },
    {
        "id": 30,
        "name": "Weje Weje",
        "artist": "Sujeto Oro 24",
        "img": "sujetoPic.jpg",
        "music": "Sujeto Oro 24 - Weje Weje.mp3"
    },
    {
        "id": 31,
        "name": "Tattoo",
        "artist": "Ala Jaza",
        "img": "alajazapic44444.jpg",
        "music": "Ala Jaza - Tattoo.mp3"
    },
    {
        "id": 32,
        "name": "FUEGO",
        "artist": "Tito Swing",
        "img": "TitoPic.jpg",
        "music": "Tito Swing - Fuego.mp3"
    },
    {
        "id": 33,
        "name": "Tabaco y Ron",
        "artist": "Ala Jaza",
        "img": "ALAJAZApIC3333.jpg",
        "music": "Ala Jaza - Tabaco y Ron.mp3"
    },
    {
        "id": 34,
        "name": "Beso A Beso",
        "artist": "Toño Rosario",
        "img": "TONOPIC2222.jpg",
        "music": "Toño Rosario - Beso A Beso.mp3"
    },
    {
        "id": 35,
        "name": "Quiero Volver A Empezar",
        "artist": "Toño Rosario",
        "img": "TonoRosariPic.jpg",
        "music": "Toño Rosario - Quiero Volver A Empezar.mp3"
    },
    {
        "id": 36,
        "name": "Alegria",
        "artist": "Toño Rosario",
        "img": "TONOPIC2222.jpg",
        "music": "Toño Rosario - Alegria.mp3"
    },
    {
        "id": 37,
        "name": "MI Mamá Me Apunto En la Escuela",
        "artist": "Sujeto Oro 24",
        "img": "SUJETOPIC3333.jpg",
        "music": "Sujeto Oro 24  -  MI Mamá Me Apunto En la Escuela.mp3"
    }   
    
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
