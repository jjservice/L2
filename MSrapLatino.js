const songs = [ 
    {   id: 1,
        name: "BALA POR TI",
        artist: "Dowel King",
        img: "./DowelKingPic.webp",
        music: "./DOWEL KING - BALA POR TI.mp3"
    },
    {   id: 2,
        name: "C473",
        artist: "Chucky73 x YOVNGCHIMI",
        img: "./Chucky73xYOVNGCHIMI-C4-73.jpg",
        music: "./Chucky73 x YOVNGCHIMI - C473.mp3"
    },
    {   id: 3,
        name: "CORAZONES",
        artist: "@420luisbrown X @johanDza",
        img: "./LuisBrownCorazonezPic.jpg",
        music: "./@420luisbrown  X @johanDza  - Corazones.mp3"
    },
    {   id: 4,
        name: "BALA",
        artist: "Dowel King",
        img: "./DowelKingPic.webp",
        music: "./DOWEL KING - BALA.mp3"
    },
    {   id: 5,
        name: "No me quiero Casar",
        artist: "Bad Bunny",
        img: "./BadBunnyBryinSedaPic.jpg",
        music: "./BAD BUNNY - NO ME QUIERO CASAR (MP3).mp3"
    },
    {   id: 6,
        name: "FUEGO A LA LATA",
        artist: "Dowel King",
        img: "./DowelKingPic.webp",
        music: "./DOWEL KING - FUEGO A LA LATA.mp3"
    },            
    {   id: 7,
        name: "Sauce Boy",
        artist: "Eladio Carrion",
        img: "EladioCarrionSauceBoyPic.jpg",
        music: "Eladio Carrión - SAUCEBOY (Freestyle).mp3"
    },
    {   id: 8,
        name: "Pa que tú me ronca",
        artist: "Químico ultra Mega x Danger",
        img: "QUIMICOPIC.jpg",
        music: "Químico ultra Mega x Danger- Pa que tú me ronca.mp3"
    },
    {   id: 9,
        name: "TOUCHDOWN",
        artist: "Messiah x Myke Towers",
        img: "MessiahMikeTouchDownPic.jpg",
        music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
    },
    {   id: 10,
        name: "CURIANA",
        artist: "El Poeta x CarlosCoins",
        img: "PoetaCarlosCurianaPic.jpg",
        music: "El Poeta, @CarlosCoins - Curiana.mp3"
    },
    {   id: 11,
        name: "El Rey De Las Rapida",
        artist: "Pressure9x19",
        img: "Pressure9RapidasPic.jpg",
        music: "Pressure9x19 - El Rey De Las Rapida.mp3"
    },
    {   id: 12,
        name: "Pila De Cotorra",
        artist: "El Fother x Darlyn Nay",
        img: "FotherDarlinPilaDeCotorraPic.jpg",
        music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
    },
    {   id: 13,
        name: "Astronauto",
        artist: "Almighty",
        img: "AlmightyPicx.jpg",
        music: "Almighty- Astronauto.mp3"
    },
    {   id: 14,
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        img: "ninoyomelPic.jpg",
        music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {   id: 15,
        name: "SEDA",
        artist: "Bad Bunny x Bryant Myers",
        img: "BadBunnyBryinSedaPic.jpg",
        music: "Bad Bunny, Bryant Myers - Seda.mp3"
    },
    {   id: 16,
        name: "SASA O DINERO",
        artist: "BRAULIO FOGON",
        img: "BraulioFogonPic.jpg",
        music: "BRAULIO FOGON - SASA O DINERO.mp3"
    },
    {   id: 17,
        name: "No Soy Mujeriego",
        artist: "Nino Freestyle",
        img: "NinoFreestylePic.avif",
        music: "Nino Freestyle - No Soy Mujeriego.mp3"
    },
    {   id: 18,
        name: "OBVIO",
        artist: "Myke Towers",
        img: "MykeObvioPIC.jpg",
        music: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {   id: 19,
        name: "Pana Mío",
        artist: "Polakan Ft. Melymel",
        img: "panamiopic.jpg",
        music: "Polakan Ft. Melymel - Pana Mío.mp3"
    },
    {   id: 20,
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - Por Mi Lau.mp3"
    },
    {   id: 21,
        name: "CRYPTO",
        artist: "Miky Woodz",
        img: "mikypicc44444.jpg",
        music: "Miky Woodz - CRYPTO.mp3"
    },
    {   id: 22,
        name: "Mi Progreso",
        artist: "Maiky el antivirus musical",
        img: "miprogresopic.jpg",
        music: "Mi progreso-Maiky el antivirus musical .mp3"
    },
    {   id: 23,
        name: "Otra Vez",
        artist: "El Fother , Mestizo Is Back",
        img: "MestizoFotheOtraVezrPic.jpg",
        music: "El Fother , Mestizo Is Back - Otra Vez.mp3"
    },
    {   id: 24,
        name: "LA MAFIA",
        artist: "Anuel AA",
        img: "ANUELLAMAFIAPICCC.jpg",
        music: "ANUEL AA - LA MAFIA.mp3"
    },
    {   id: 25,
        name: "Where You At",
        artist: "Lito Kirino",
        img: "LitoKirinoWhereuatPic.jpg",
        music: "Lito Kirino - Where You At.mp3"
    },
    {   id: 26,
        name: "BAJA Y SUBE",
        artist: "Rokero x Luar La L",
        img: "LualLSubeBajPic.jpg",
        music: "Rokero x Luar La L - Baja y Sube.mp3"
    },
    {   id: 27,
        name: "SOLITA",
        artist: "Ozuna, Bad Bunny, Wisin, Almighty",
        img: "SolitaRemmixPic.jpg",
        music: "Ozuna, DJ Luian, Mambo Kingz - Solita (Audio) ft. Bad Bunny, Wisin, Almighty.mp3"
    },
    {   id: 28,
        name: "BACK TO BACK",
        artist: "BRAULIO FOGON X LUIS BROWN",
        img: "fogobackPic.jpg",
        music: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
    },
    {   id: 29,
        name: "Respeten o Respeten",
        artist: "Maiky el antivirus musical",
        img: "maikyima3.jpg",
        music: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
    },
    {   id: 30,
        name: "Solo $exo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Solo $exo.mp3"
    },
    {   id: 31,
        name: "Pauta y Flow",
        artist: "Myke Towers",
        img: "mykepic4.jpg",
        music: "Myke Towers - Pauta y Flow.mp3"
    },
    {   id: 32,
        name: "777",
        artist: "Lito Kirino ft. Tali",
        img: "777PIC.jpg",
        music: "Lito Kirino - 777 ft. Tali.mp3"
    },
    {   id: 33,
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
    {   id: 34,
        name: "Freestyle 8",
        artist: "Mandrake",
        img: "MANDRAKEPIC2.jpg",
        music: "Mandrake - Freestyle 8.mp3"
    },
    {   id: 35,
        name: "FreeStyle 5",
        artist: "ManDrake El MaloCorita",
        img: "MANDRAKEPIC1.jpg",
        music: "ManDrake El MaloCorita - FreeStyle 5.mp3"
    },
    {   id: 36,
        name: "FreeStyle 4",
        artist: "Mandrake El Malocorita",
        img: "MANDRAKEPIC3.jpg",
        music: "Mandrake El Malocorita - FreeStyle 4.mp3"
    },
    {   id: 37,
        name: "31",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - 31.mp3"
    },
    {   id: 38,
        name: "OG CITY",
        artist: "Miky Woodz",
        img: "MIKYPIC33333.jpg",
        music: "Miky Woodz - OG CITY.mp3"
    },
    {   id: 39,
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        img: "lualdrippic.jpg",
        music: "Luar La L & Sinfonico - Drip.mp3"
    },
    {   id: 40,
        name: "La Pieza",
        artist: "Luar La L",
        img: "LUAPIC333.jpg",
        music: "La Pieza - Luar La L.mp3"
    },
    {   id: 41,
        name: "Alto Riesgo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Alto Riesgo.mp3"
    },
    {   id: 42,
        name: "Joven Leyenda",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Joven Leyenda.mp3"
    },
    {   id: 43,
        name: "Los Angeles",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Los Angeles.mp3"
    }, 
    {   id: 44,
        name: "Atras del Peso",
        artist: "Mozart La Para x Black Jonas Point",
        img: "ATRASDELPESOPICCCCC.jpg",
        music: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
    },
    {   id: 45,
        name: "Ajedrez",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {   id: 46,
        name: "Cuando me Ven",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {   id: 47,
        name: "34.PFA",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {   id: 48,
        name: "Megvtron",
        artist: "YoungChimi",
        img: "YoungChimiMegatronPic.jpg",
        music: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
    },
    {   id: 49,
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
    {   id: 50,
        name: "Que Esta Pasando",
        artist: "El Jincho",
        img: "JINCHOPIC.jpg",
        music: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
    },
    {   id: 51,
        name: "EL NUEVO PAPA",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "QUIMICO_NUEVO_PAPA.mp3"
    },
    {   id: 52,
        name: "Demasiado Yagala",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
    },
    {   id: 53,
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        img: "NENGODARPIC.jpg",
        music: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {   id: 54,
        name: "TA TO SALDO",
        artist: "Miky Woodz ft Myke Towers",
        img: "TATOSALDOPIC.jpg",
        music: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
    },
    {   id: 55,
        name: "Jovenes Millonarios",
        artist: "Eladio Carrion ft Myke Towers",
        img: "JMILLONARIOSPIC.jpg",
        music: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
    },
    {   id: 56,
        name: "ORGANICO",
        artist: "Jamby El Favo",
        img: "JambyOrganicoPic.jpg",
        music: "Jamby El Favo - Orgánico.mp3"
    },
    {   id: 57,
        name: "Las Pistas Son De Yecko",
        artist: "Yecko ft Pressure 9x19",
        img: "LasPistasSonDeYeckoPic.jpg",
        music: "Yecko ft Pressure 9x19 - Las Pistas Son De Yecko.mp3"
    },
    {   id: 58,
        name: "EL MEJOR",
        artist: "Nino Freestyle",
        img: "NinoFreeElMejorPic.jpg",
        music: "Nino Freestyle - El Mejor  2 Millones De Seguidores.mp3"
    },
    {   id: 59,
        name: "Ele Uve (Remix)",
        artist: "Eladio Carrion x Natanael Cano  x Ovi",
        img: "./eleuveremixPic.jpg",
        music: "./Eladio Carrion x Natanael Cano  x Ovi - Ele Uve (Remix) ft. Noriel.mp3"
    },
    {   id: 60,
        name: "Me Llueven",
        artist: "Bad Bunny x Poeta Callejero x Mark B",
        img: "./BadBunnyPoetaMarkBmelluevenPic.jpg",
        music: "./Me Llueven Ft Bad Bunny & Mark B.mp3"
    },
    {   id: 61,
        name: "Tu vas a querer una foto conmigo",
        artist: "Monkey Black",
        img: "./MonkeyBlackPic.jpg",
        music: "./Monkey black Tu vas a querer una foto conmigo.mp3"
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
        `;

        const songImage = songItem.querySelector("img"); // Get the image element
        songImage.addEventListener("click", () => {
            playOrPauseSong(song);
        });

        songList.appendChild(songItem);
    });
}
 
 function playOrPauseSong(song, img) {
    // Get the song image element by ID
    const songImageDisplay = document.getElementById("current-song-image");

    if (isPlaying && currentSongId === song.id) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioSource.src = song.music;
        audioSource.dataset.songId = song.id;
        audioPlayer.load();
        audioPlayer.play();
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
