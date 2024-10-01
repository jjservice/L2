// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        image: "ninoyomelPic.jpg",
        path: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {
        name: "Pana Mío",
        artist: "Polakan Ft. Melymel",
        image: "panamiopic.jpg",
        path: "Polakan Ft. Melymel - Pana Mío.mp3"
    },
    {
        name: "Astronauto",
        artist: "Almighty",
        image: "AlmightyPicx.jpg",
        path: "Almighty- Astronauto.mp3"
    },
    {
        name: "BAJA Y SUBE",
        artist: "Rokero x Luar La L",
        image: "LualLSubeBajPic.jpg",
        path: "Rokero x Luar La L - Baja y Sube.mp3"
    },
    {
        name: "SOLITA",
        artist: "Ozuna, Bad Bunny, Wisin, Almighty",
        image: "SolitaRemmixPic.jpg",
        path: "Ozuna, DJ Luian, Mambo Kingz - Solita (Audio) ft. Bad Bunny, Wisin, Almighty.mp3"
    },
    {
        name: "KINGDOM",
        artist: "Tali Goya",
        image: "TALIGOYAkINDOMPIC.jpg",
        path: "Tali Goya - Kingdom.mp3"
    },
    {
        name: "BACK TO BACK",
        artist: "BRAULIO FOGON X LUIS BROWN",
        image: "fogobackPic.jpg",
        path: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
    },
    {
        name: "ASEGURAO",
        artist: "Shadow Blow X Lapiz Conciente",
        image: "SHADOWLAPIS5555.jpg",
        path: "Shadow Blow  Lapiz Conciente - ASEGURAO.mp3"
    },
    {
        name: "CRYPTO",
        artist: "Miky Woodz",
        image: "mikypic5555.jpg",
        path: "Miky Woodz - CRYPTO.mp3"
    },
    {
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        image: "MIKYWOODSPIC111.jpg",
        path: "Miky Woodz - Por Mi Lau.mp3"
    },
    {
        name: "Mujeres Como Tu",
        artist: "Lapiz Conciente X Shadow Blow",
        image: "LAPIZSHADOWPIC.jpg",
        path: "Lapiz Conciente ft. Shadow Blow - Mujeres Como Tu.mp3"
    },
    {
        name: "27 Mensajes",
        artist: "Shadow Blow X Lapiz Conciente",
        image: "LAPIZSHADOWPIC.jpg",
        path: "Shadow Blow  Lapiz Conciente  27 Mensajes.mp3"
    },
    {
        name: "Solo $exo",
        artist: "Myke Towers",
        image: "mykepic2.jpg",
        path: "Myke Towers - Solo $exo.mp3"
    },
    {
        name: "Pauta y Flow",
        artist: "Myke Towers",
        image: "mykepic4.jpg",
        path: "Myke Towers - Pauta y Flow.mp3"
    },
    {
        name: "777",
        artist: "Lito Kirino ft. Tali",
        image: "777PIC.jpg",
        path: "Lito Kirino - 777 ft. Tali.mp3"
    },
    {
        name: "Quienes son",
        artist: "C-Dobleta",
        image: "quieneson.jpg",
        path: "QUIENES SON- CDOBLETA.mp3"
    },
    {
        name: "Freestyle 8",
        artist: "Mandrake",
        image: "MANDRAKEPIC2.jpg",
        path: "Mandrake - Freestyle 8.mp3"
    },
    {
        name: "FreeStyle 5",
        artist: "ManDrake El MaloCorita",
        image: "MANDRAKEPIC1.jpg",
        path: "ManDrake El MaloCorita - FreeStyle 5.mp3"
    },
    {
        name: "FreeStyle 4",
        artist: "Mandrake El Malocorita",
        image: "MANDRAKEPIC3.jpg",
        path: "Mandrake El Malocorita - FreeStyle 4.mp3"
    },
    {
        name: "31",
        artist: "Miky Woodz",
        image: "MIKYWOODSPIC111.jpg",
        path: "Miky Woodz - 31.mp3"
    },
    {
        name: "OG CITY",
        artist: "Miky Woodz",
        image: "MIKYPIC33333.jpg",
        path: "Miky Woodz - OG CITY.mp3"
    },
    {
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        image: "LUALLPICCC1111.jpg",
        path: "Luar La L & Sinfonico - Drip.mp3"
    },
    {
        name: "La Pieza",
        artist: "Luar La L",
        image: "LUAPIC333.jpg",
        path: "La Pieza - Luar La L.mp3"
    },
    {
        name: "Alto Riesgo",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Alto Riesgo.mp3"
    },
    {
        name: "Joven Leyenda",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Joven Leyenda.mp3"
    },
    {
        name: "Dígitos",
        artist: "Arcangel X Myke Towers",
        image: "MIKEARCPICCC.jpg",
        path: "Arcangel, Myke Towers -Dígitos.mp3"
    },
    {
        name: "Los Angeles",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Los Angeles.mp3"
    }, 
    {
        name: "Atras del Peso",
        artist: "Mozart La Para x Black Jonas Point",
        image: "ATRASDELPESOPICCCCC.jpg",
        path: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
    },
    {
        name: "Ajedrez",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {
        name: "Cuando me Ven",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {
        name: "34.PFA",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {
        name: "Tú No Ta'",
        artist: "Lapiz Conciente",
        image: "LAPIZPIC222222.jpg",
        path: "Lapiz Conciente - Tú No Ta'.mp3"
    },
    {
        name: "9 Dias",
        artist: "Lapiz Conciente",
        image: "lapizPi.jpg",
        path: "Lapiz Conciente - 9 Dias.mp3"
    },
    {
        name: "Que Esta Pasando",
        artist: "El Jincho",
        image: "JINCHOPIC.jpg",
        path: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
    },
    {
        name: "EL NUEVO PAPA",
        artist: "QUIMICO ULTRA MEGA",
        image: "QUIMICOPIC.jpg",
        path: "QUIMICO_NUEVO_PAPA.mp3"
    },
    {
        name: "Demasiado Yagala",
        artist: "QUIMICO ULTRA MEGA",
        image: "QUIMICOPIC.jpg",
        path: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
    },
    {
        name: "Living Life",
        artist: "Miky Woodz",
        image: "MIKYWOODS.jpg",
        path: "Miky Woodz  - Living Life (Video Oficial).mp3"
    },
    {
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        image: "NENGODARPIC.jpg",
        path: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {
        name: "TA TO SALDO",
        artist: "Miky Woodz ft Myke Towers",
        image: "TATOSALDOPIC.jpg",
        path: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
    },
    {
        name: "Jovenes Millonarios",
        artist: "Eladio Carrion ft Myke Towers",
        image: "JMILLONARIOSPIC.jpg",
        path: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
    },
    {
        name: "Fast Money",
        artist: "Ñengo Flow ft Myke Towers",
        image: "FASTMONEYPC.jpg",
        path: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {
        name: "OBVIO",
        artist: "Myke Towers",
        image: "MykeObvioPIC.jpg",
        path: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {
        name: "Trending",
        artist: "Dei V ft Myke Towers",
        image: "TrendiDeiviTowerPic.jpg",
        path: "Dei V, Myke Towers - Trending Remix (LetraLyrics).mp3"
    },
    {
        name: "La Música No Miente",
        artist: "Lapiz Conciente",
        image: "lapizPi.jpg",
        path: "Lapiz Conciente - La Música No Miente.mp3"
    },
    {
        name: "Respeten o Respeten",
        artist: "Maiky el antivirus musical",
        image: "maikyima3.jpg",
        path: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
    },
    {
        name: "Mi Progreso",
        artist: "Maiky el antivirus musical",
        image: "miprogresopic.jpg",
        path: "Mi progreso-Maiky el antivirus musical .mp3"
    },
    {
        name: "Megvtron",
        artist: "YoungChimi",
        image: "younChimmi.jpg",
        path: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
    },
    {
        name: "Quienes son",
        artist: "C-Dobleta",
        image: "quieneson.jpg",
        path: "QUIENES SON- CDOBLETA.mp3"
    },
];


function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage = 
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = 
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // Set the background to the new color
    document.body.style.background = bgColor;
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider 
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            // Load the first track in the tracklist
loadTrack(track_index);
