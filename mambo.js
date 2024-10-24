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
        name: "A CUALTA MI GATA",
        artist: "Omega El Fuerte",
        image: "omegapic.jpg",
        path: "Omega-A Cualta Mi Gata.mp3"
    },
    {
        name: "Con Quién Te Olvido",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Con Quién Te Olvido.mp3"
    },
    {
        name: "LA NOTA",
        artist: "GABRIEL PAGAN x OMEGA",
        image: "GABRIELOMEGAPIC.jpg",
        path: "GABRIEL PAGAN  OMEGA - LA NOTA.mp3"
    },
    {
        name: "Si antes te hubiera conocido",
        artist: "Karol G",
        image: "MECUROPIC.jpg",
        path: "KAROL G - Si Antes Te Hubiera Conocido.mp3"
    },
    {
        name: "EL MERENGUE",
        artist: "Marshmello x Manuel Turizo ",
        image: "ManuelTurizoMerenguwPic.jpg",
        path: "Marshmello, Manuel Turizo - El Merengue.mp3"
    },
    {
        name: "Tu Mayimbe",
        artist: "Sujeto Oro 24 ",
        image: "SUJETOPIC3333.jpg",
        path: "sujeto Oro 24 - Tu Mayimbe.mp3"
    },
    {
        name: "Vieja Dale Dale",
        artist: "Toño Rosario",
        image: "TonoRosariPic.jpg",
        path: "Toño Rosario - Vieja Dale Dale.mp3"
    },
    {
        name: "PEPAS",
        artist: "Ala Jaza",
        image: "ALAJAZApIC3333.jpg",
        path: "ALAJAZA-PEPAS.mp3"
    },
    {
        name: "To' la Mujeres Rapan",
        artist: "Amarfis Y la banda de Atakke",
        image: "AmarfisPic1.jpg",
        path: "Amarfis Y la banda de Atakke-To' la Mujeres Rapan.mp3"
    },
    {
        name: "Mi Forma De Ser",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Mi Forma De Ser.mp3"
    },
    {
        name: "No me hable de Gente",
        artist: "Sujeto Oro 24 ",
        image: "SUJETOPIC3333.jpg",
        path: "Sujeto Oro 24 - No me hable de Gente.mp3"
    },
    {
        name: "Simplemente Gracias",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Simplemente Gracias.mp3"
    },
    {
        name: "HEAVY",
        artist: "Sujeto Oro 24",
        image: "SUJETOPICCCC222222.jpg",
        path: "Sujeto oro 24 - Heavy.mp3"
    },
    {
        name: "Yo Quiero Un Vacilon",
        artist: "Toño Rosario",
        image: "TonoRosariPic.jpg",
        path: "Yo Quiero Un Vacilon.mp3"
    },
    {
        name: "El Guayo",
        artist: "Amarfis y la banda de Atakke",
        image: "amarfispic222.jpg",
        path: "Amarfis y la banda de Atakke-El Guayo.mp3"
    },
    {
        name: "Mi Mundo Lo Controlo Yo",
        artist: "Sujeto Oro 24",
        image: "SujetoMimundoPic.jpg",
        path: "Sujeto Oro 24  -  Mi Mundo Lo Controlo Yo.mp3"
    },
    {
        name: "Ando En La Versace",
        artist: "Omega El Fuerte",
        image: "omegapic.jpg",
        path: "Omega El  Fuerte-Ando En La Versace.mp3"
    },
    {
        name: "BOBO",
        artist: "Sujeto",
        image: "sujetoPic.jpg",
        path: "SUJETO ORO 24 - BOBO.mp3"
    },
    {
        name: "Nadie Se Meta",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Nadie Se Meta.mp3"
    },
    {
        name: "Toma Lo Que Te Mandé",
        artist: "Toño Rosario",
        image: "TonoRosariPic.jpg",
        path: "Toño Rosario - Toma Lo Que Te Mandé.mp3"
    },
    {
        name: "El Vecino",
        artist: "Sujeto oro 24",
        image: "SUJETOPICCCC222222.jpg",
        path: "Sujeto oro 24-El Vecino.mp3"
    },
    {
        name: "Fariseo",
        artist: "Omega El Fuerte",
        image: "omegapic2.jpg",
        path: "Omaga El Fuerte-Fariseo.mp3"
    },
    {
        name: "SUJETO ORO 24",
        artist: "CUIDATE",
        image: "sujetocuidatepiiccc.jpg",
        path: "SUJETO ORO 24 - CUIDATE.mp3"
    },
    {
        name: "El Pollo",
        artist: "Amarfis y la banda de Atakke",
        image: "AmarfisPic1.jpg",
        path: "Amarfis y la banda de Atakee-El Pollo.mp3"
    },
    {
        name: "NO ME HABLEN DE ELLA",
        artist: "SUJETO 0R0 24",
        image: "SUJETOPIC3333.jpg",
        path: "SUJETO 0R0 24 - NO ME HABLEN DE ELLA.mp3"
    },
    {
        name: "Yemaya",
        artist: "Amarfis Y la banda de Atakke",
        image: "amarfispic333.jpg",
        path: "Amarfis Y la banda de Atakke-Yemaya.mp3"
    },
    {
        name: "TU NO CORRE",
        artist: "SUJETO ORO 24",
        image: "SUJETOPICCCC222222.jpg",
        path: "TU NO CORRE - SUJETO ORO 24.mp3"
    },
    {
        name: "ME VOY PAL PUEBLO",
        artist: "Toño Rosario",
        image: "TONOPIC2222.jpg",
        path: "Toño Rosario - ME VOY PAL PUEBLO.mp3"
    },
    {
        name: "Misericordia",
        artist: "Ala Jaza",
        image: "alajazapic222.jpg",
        path: "Ala Jaza - Misericordia.mp3"
    },
    {
        name: "Weje Weje",
        artist: "Sujeto Oro 24",
        image: "sujetoPic.jpg",
        path: "Sujeto Oro 24 - Weje Weje.mp3"
    },
    {
        name: "Tattoo",
        artist: "Ala Jaza",
        image: "alajazapic44444.jpg",
        path: "Ala Jaza - Tattoo.mp3"
    },
    {
        name: "FUEGO",
        artist: "Tito Swing",
        image: "TitoPic.jpg",
        path: "Tito Swing - Fuego.mp3"
    },
    {
        name: "Tabaco y Ron",
        artist: "Ala Jaza",
        image: "ALAJAZApIC3333.jpg",
        path: "Ala Jaza - Tabaco y Ron.mp3"
    },
    {
        name: "Beso A Beso",
        artist: "Toño Rosario",
        image: "TONOPIC2222.jpg",
        path: "Toño Rosario - Beso A Beso.mp3"
    },
    {
        name: "Quiero Volver A Empezar",
        artist: "Toño Rosario",
        image: "TonoRosariPic.jpg",
        path: "Toño Rosario - Quiero Volver A Empezar.mp3"
    },
    {
        name: "Alegria",
        artist: "Toño Rosario",
        image: "TONOPIC2222.jpg",
        path: "Toño Rosario - Alegria.mp3"
    },
    {
        name: "MI Mamá Me Apunto En la Escuela",
        artist: "Sujeto Oro 24",
        image: "SUJETOPIC3333.jpg",
        path: "Sujeto Oro 24  -  MI Mamá Me Apunto En la Escuela.mp3"
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
