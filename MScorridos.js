const songs = [ 
    {
        "id": 1,
        "name": "En Mi Mundo",
        "artist": "Jasiel Nuñez x Peso Pluma",
        "img": "JasielPesoplumaEnmiMundoPIc.jpg",
        "music": "En Mi Mundo - Jasiel Nuñez, Peso Pluma.mp3"
    },
    {
        "id": 2,
        "name": "NO ME PESA",
        "artist": "Junior H",
        "img": "jUNIORhpIC.jpg",
        "music": "Junior H - No Me Pesa.mp3"
    },
    {
        "id": 3,
        "name": "CORAZON FRIO",
        "artist": "Jasiel Nuñez x DannyLux",
        "img": "CorazonFrionJasielNuPic.jpg",
        "music": "Jasielcorazonfriomp3.mp3"
    },
    {
        "id": 4,
        "name": "Qué Tal",
        "artist": "Christian Nodal",
        "img": "chrispic44.jpg",
        "music": "Christian Nodal - Qué Tal.mp3"
    },
    {
        "id": 5,
        "name": "MENTE POSITIVA",
        "artist": "Junior H",
        "img": "JuniorMentePosPic.jpg",
        "music": "Junior H - MENTE POSITIVA.mp3"
    },
    {
        "id": 6,
        "name": "Probablemente",
        "artist": "Christian Nodal",
        "img": "CHRISTIANNODALPIC.jpg",
        "music": "Christian Nodal - Probablemente.mp3"
    },
    {
        "id": 7,
        "name": "Mas Altas Que Bajadas",
        "artist": "Natanael Cano",
        "img": "NatanaelPic22222.jpg",
        "music": "Natanael Cano - Mas Altas Que Bajadas.mp3"
    },
    {
        "id": 8,
        "name": "Nace Un Borracho",
        "artist": "Christian Nodal",
        "img": "CHRISTIANNODALPIC.jpg",
        "music": "Christian Nodal - Nace Un Borracho.mp3"
    },
    {
        "id": 9,
        "name": "MORRITAS",
        "artist": "Natanael Cano",
        "img": "NataMorritaPicx.jpg",
        "music": "Natanael Cano - Morritas.mp3"
    },
    {
        "id": 10,
        "name": "NUEVA VIDA",
        "artist": "Peso Pluma",
        "img": "PesoPlumaPic1111.jpg",
        "music": "NUEVA VIDA - Peso Pluma.mp3"
    },
    {
        "id": 11,
        "name": "No te contaron mal",
        "artist": "Christian Nodal",
        "img": "notecontaronmal.jpg",
        "music": "Christian Nodal - No Te Contaron Mal (Audio).mp3"
    },
    {
        "id": 12,
        "name": "Pacas De Billetes",
        "artist": "Natanael Cano",
        "img": "NatanaelPic.jpg",
        "music": "Natanael Cano - Pacas De Billetes.mp3"
    },
    {
        "id": 13,
        "name": "De Los Besos Que Te Di",
        "artist": "Christian Nodal",
        "img": "CHRISTIANNODALPIC.jpg",
        "music": "Christian Nodal - De Los Besos Que Te Di.mp3"
    },
    {
        "id": 14,
        "name": "CARNAL",
        "artist": "Peso Pluma x Natanael Cano",
        "img": "PESONATAPIC22222.jpg",
        "music": "CARNAL - Peso Pluma, Natanael Cano.mp3"
    },
    {
        "id": 15,
        "name": "Por el Resto de Tu Vida",
        "artist": "Christian Nodal x TINI",
        "img": "chrisporelrestopicc.jpg",
        "music": "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
    },
    {
        "id": 16,
        "name": "Según Quién",
        "artist": "Maluma x Carin Leon",
        "img": "malumacaripic.jpg",
        "music": "Maluma, Carin Leon - Según Quién.mp3"
    },
    {
        "id": 17,
        "name": "POR LAS NOCHES",
        "artist": "Peso Pluma",
        "img": "PesoPlumaPic1111.jpg",
        "music": "Peso Pluma - Por Las Noches.mp3"
    },
    {
        "id": 18,
        "name": "Te Fallé",
        "artist": "Christian Nodal",
        "img": "chrispic33.jpg",
        "music": "Christian Nodal - Te Fallé.mp3"
    },
    {
        "id": 19,
        "name": "BYE",
        "artist": "Peso Pluma",
        "img": "PESOPLUMABYE.jpg",
        "music": "BYE - Peso Pluma.mp3"
    },
    {
        "id": 20,
        "name": "SE AMERITA",
        "artist": "Junior H",
        "img": "JuniorHPic2222.jpg",
        "music": "Junior H - Se Amerita.mp3"
    },
    {
        "id": 21,
        "name": "ANDO SOLTERO",
        "artist": "Natanael Cano",
        "img": "NataAndoSolteroPic.jpg",
        "music": "Ando Soltero - Natanael.mp3"
    },
    {
        "id": 22,
        "name": "ADRENALINA",
        "artist": "Natanael Cano x Dan Sanchez",
        "img": "NatAdrenalinaPic.jpg",
        "music": "Natanael Cano - ADRENALINA.mp3"
    },
    {
        "id": 23,
        "name": "TENGO MOTIVOS",
        "artist": "Junior H",
        "img": "JunioHPic33333.png",
        "music": "Junior H - Tengo Motivos.mp3"
    },
    {
        "id": 24,
        "name": "AFS",
        "artist": "Natanael Cano",
        "img": "NatanaelPic.jpg",
        "music": "Natanael Cano - AFS-MP3.mp3"
    },
    {
        "id": 25,
        "name": "LAGUNAS",
        "artist": "Peso Pluma X Jasiel Nuñez",
        "img": "PESOJASLAGUNASPIC.jpeg",
        "music": "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
    },
    {
        "id": 26,
        "name": "CIELO ETERNO",
        "artist": "Jasiel Núñez",
        "img": "JASIELNUPICCC.jpg",
        "music": "Cielo Eterno - Jasiel Nuñez, DannyLux.mp3"
    },
    {
        "id": 27,
        "name": "BACCARAT",
        "artist": "Natanael Cano & Peso Pluma",
        "img": "PESONATAPIC22222.jpg",
        "music": "Baccarat - Natanael Cano & Peso Pluma.mp3"
    },
    {
        "id": 28,
        "name": "ROSA PASTEL",
        "artist": "Peso Pluma x Jasiel Nuñez",
        "img": "PesoJasiel-RossaPaPic.jpg",
        "music": "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
    },
    {
        "id": 29,
        "name": "Aquí Abajo",
        "artist": "Christian Nodal",
        "img": "CHRISTIANNODALPIC.jpg",
        "music": "Christian Nodal - Aquí Abajo.mp3"
    },
    {
        "id": 30,
        "name": "BIPOLAR",
        "artist": "Peso Pluma, Jasiel Nuñez, Junior H",
        "img": "PesoJaieslJunirHPIC.jpg",
        "music": "Peso Pluma, Jasiel Nuñez, Junior H - Bipolar.mp3"
    },
    {
        "id": 31,
        "name": "Cuando La Vida Sea Trago",
        "artist": "Carin León",
        "img": "CARINLEONCUANLAVIDASEAPIC.jpg",
        "music": "Carin León - Cuando La Vida Sea Trago.mp3"
    },
    {
        "id": 32,
        "name": "AMG",
        "artist": "Natanael Cano x Gabito Ballesteros x Peso Pluma",
        "img": "PesoNatAmgPic.jpg",
        "music": "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
    },
    {
        "id": 33,
        "name": "No Me Llores",
        "artist": "Carin Leon x Manuel Carrasco",
        "img": "carinmanuepic.jpg",
        "music": "Carin León, Manuel Carrasco - No Me Llores.mp3"
    },
    {
        "id": 34,
        "name": "PRC",
        "artist": "Peso Pluma x Natanael Cano",
        "img": "PesoNatPic.jpg",
        "music": "Peso Pluma, Natanael Cano - PRC.mp3"
    },
    {
        "id": 35,
        "name": "No Es Por Acá",
        "artist": "Carin Leon",
        "img": "noesporacapic.jpg",
        "music": "Carin Leon - No Es Por Acá.mp3"
    },
    {
        "id": 36,
        "name": "Kbron y Medio",
        "artist": "Christian Nodal",
        "img": "chrispic11.jpg",
        "music": "Christian Nodal - Kbron y Medio.mp3"
    },
    {
        "id": 37,
        "name": "La Siguiente",
        "artist": "Kany García x Christian Nodal",
        "img": "lasiguientepic.jpg",
        "music": "Kany García, Christian Nodal - La Siguiente.mp3"
    },
    {
        "id": 38,
        "name": "La Bachatita",
        "artist": "Christian Nodal",
        "img": "chrispic33.jpg",
        "music": "Christian Nodal - La Bachatita.mp3"
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
