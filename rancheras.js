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
        name: "NO ME PESA",
        artist: "Junior H",
        image: "jUNIORhpIC.jpg",
        path: "Junior H-No Me Pesa.mp3"
    },
    {
        name: "CORAZON FRIO",
        artist: "Jasiel Nuñez x DannyLux",
        image: "CorazonFrionJasielNuPic.jpg",
        path: "Jasielcorazonfriomp3.mp3"
    },
    {
        name: "Qué Tal",
        artist: "Christian Nodal",
        image: "chrispic44.jpg",
        path: "Christian Nodal - Qué Tal.mp3"
    },
    {
        name: "MENTE POSITIVA",
        artist: "Junior H",
        image: "JuniorMentePosPic.jpg",
        path: "Junior H - MENTE POSITIVA.mp3"
    },
    {
        name: "Probablemente",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal-Probablemente.mp3"
    },
    {
        name: "Mas Altas Que Bajadas",
        artist: "Natanael Cano",
        image: "NatanaelPic22222.jpg",
        path: "Natanael Cano - Mas Altas Que Bajadas.mp3"
    },
    {
        name: "Nace Un Borracho",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Nace Un Borracho.mp3"
    },
    {
        name: "MORRITAS",
        artist: "Natanael Cano",
        image: "NataMorritaPicx.jpg",
        path: "Natanael Cano - Morritas.mp3"
    },
    {
        name: "NUEVA VIDA",
        artist: "Peso Pluma",
        image: "PesoPlumaPic1111.jpg",
        path: "NUEVA VIDA - Peso Pluma.mp3"
    },
    {
        name: "No te contaron mal",
        artist: "Christian Nodal",
        image: "notecontaronmal.jpg",
        path: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
    },
    {
        name: "Pacas De Billetes",
        artist: "Natanael Cano",
        image: "NatanaelPic.jpg",
        path: "Natanael Cano - Pacas De Billetes.mp3"
    },
    {
        name: "De Los Besos Que Te Di",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - De Los Besos Que Te Di.mp3"
    },
    {
        name: "CARNAL",
        artist: "Peso Pluma x Natanael Cano",
        image: "PESONATAPIC22222.jpg",
        path: "CARNAL - Peso Pluma, Natanael Cano.mp3"
    },
    {
        name: "Por el Resto de Tu Vida",
        artist: "Christian Nodal x TINI",
        image: "chrisporelrestopicc.jpg",
        path: "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
    },
    {
        name: "Según Quién",
        artist: "Maluma x Carin Leon ",
        image: "malumacaripic.jpg",
        path: "Maluma, Carin Leon - Según Quién.mp3"
    },
    {
        name: "POR LAS NOCHES",
        artist: "Peso Pluma",
        image: "PesoPlumaPic1111.jpg",
        path: "Peso Pluma - Por Las Noches.mp3"
    },
    {
        name: "Te Fallé",
        artist: "Christian Nodal",
        image: "chrispic33.jpg",
        path: "Christian Nodal-Te Fallé.mp3"
    },
    {
        name: "BYE",
        artist: "Peso Pluma",
        image: "PESOPLUMABYE.jpg",
        path: "BYE - Peso Pluma.mp3"
    },
    {
        name: "SE AMERITA",
        artist: "Junior H",
        image: "JuniorHPic2222.jpg",
        path: "Junior H-Se Amerita.mp3"
    },
    {
        name: "ANDO SOLTERO",
        artist: "Natanael Cano",
        image: "NataAndoSolteroPic.jpg",
        path: "Ando Soltero - Natanael.mp3"
    },
    {
        name: "ADRENALINA",
        artist: "Natanael Cano x Dan Sanchez",
        image: "NatAdrenalinaPic.jpg",
        path: "Natanael Cano-ADRENALINA.mp3"
    },
    {
        name: "TENGO MOTIVOS",
        artist: "Junior H",
        image: "JunioHPic33333.png",
        path: "Junior H - Tengo Motivos.mp3"
    },
    {
        name: "AFS",
        artist: "Natanael Cano",
        image: "NatanaelPic.jpg",
        path: "Natanael Cano-AFS-MP3.mp3"
    },
    {
        name: "LAGUNAS",
        artist: "Peso Pluma X Jasiel Nuñez",
        image: "PESOJASLAGUNASPIC.jpeg",
        path: "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
    },
    {
        name: "CIELO ETERNO",
        artist: "Jasiel Núñez x ",
        image: "JASIELNUPICCC.jpg",
        path: "cielo-eterno-jasiel-nunez-dannyluxMP33.mp3"
    },
    {
        name: "BACCARAT",
        artist: "Natanael Cano & Peso Pluma",
        image: "PESONATAPIC22222.jpg",
        path: "Baccarat - Natanael Cano & Peso Pluma.mp3"
    },
    {
        name: "ROSA PASTEL",
        artist: "Peso Pluma x Jasiel Nuñez",
        image: "PesoJasiel-RossaPaPic.jpg",
        path: "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
    },
    {
        name: "Aquí Abajo",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Aquí Abajo.mp3"
    },
    {
        name: "BIPOLAR",
        artist: "Peso Pluma, Jasiel Nuñez, Junior H",
        image: "PesoJaieslJunirHPIC.jpg",
        path: "Peso Pluma, Jasiel Nuñez, Junior H-bipolar.mp3"
    },
    {
        name: "Cuando La Vida Sea Trago",
        artist: "Carin León",
        image: "CARINLEONCUANLAVIDASEAPIC.jpg",
        path: "Carin León - Cuando La Vida Sea Trago.mp3"
    },
    {
        name: "AMG",
        artist: "Natanael Cano x Gabito Ballesteros x Peso Pluma",
        image: "PesoNatAmgPic.jpg",
        path: "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
    },
    {
        name: "No Me Llores",
        artist: "Carin Leon x Manuel Carrasco",
        image: "carinmanuepic.jpg",
        path: "Carin León, Manuel Carrasco - No Me Llores.mp3"
    },
    {
        name: "PRC",
        artist: "Peso Pluma x Natanael Cano",
        image: "PesoNatPic.jpg",
        path: "Peso Pluma, Natanael Cano - PRC.mp3"
    },
    {
        name: "No Es Por Acá",
        artist: "Carin Leon",
        image: "noesporacapic.jpg",
        path: "Carin Leon - No Es Por Acá.mp3"
    },
    {
        name: "Kbron y Medio",
        artist: "Christian Nodal",
        image: "chrispic11.jpg",
        path: "Christian Nodal - Kbron y Medio.mp3"
    },
    {
        name: "La Siguiente",
        artist: "Kany García x Christian Nodal",
        image: "lasiguientepic.jpg",
        path: "Kany García, Christian Nodal - La Siguiente.mp3"
    },
    {
        name: "La Bachatita",
        artist: "Christian Nodal",
        image: "chrispic33.jpg",
        path: "Christian Nodal - La Bachatita.mp3"
    },
    {
        name: "Igualito A Mi Apá",
        artist: "Fuerza Regida X Peso Pluma",
        image: "PesoFuerzaPIc.jpg",
        path: "Fuerza Regida X Peso Pluma - Igualito A Mi Apá.mp3"
    },
    {
        name: "Y LLORO",
        artist: "Junior H",
        image: "jUNIORhpIC.jpg",
        path: "Junior H - Y LLORO.mp3"
    },
    {
        name: "Me Dejé Llevar",
        artist: "Christian Nodal",
        image: "chrispic33.jpg",
        path: "Christian Nodal-Me Dejé Llevar.mp3"
    },
    {
        name: "Confieso",
        artist: "Kany García ",
        image: "kanypic.jpg",
        path: "Kany García - Confieso.mp3"
    },
    {
        name: "Vamos Para Arriba",
        artist: "Junior H Ft. Gabito Ballesteros",
        image: "JunioGabitoPic.jpg",
        path: "Vamos Para Arriba - Junior H Ft. Gabito Ballesteros.mp3"
    },
    {
        name: "Ojalá",
        artist: "Christian Nodal",
        image: "chrispic44.jpg",
        path: "Christian Nodal-Ojalá.mp3"
    },
    {
        name: "LA GLORIA ERES TU",
        artist: "Luis Miguel",
        image: "luismiguel.jpg",
        path: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3"
    },
    {
        name: "Te Lo Agradezco",
        artist: "Kany Garcia x Carin Leon ",
        image: "teloagradezcopic.jpg",
        path: "Kany Garcia x Carin Leon - Te Lo Agradezco.mp3"
    },
    {
        name: "Eres",
        artist: "Christian Nodal",
        image: "chrispic44.jpg",
        path: "Christian Nodal-Eres.mp3"
    },
    {
        name: "Te Voy A Olvidar",
        artist: "Christian Nodal",
        image: "chrispic33.jpg",
        path: "Christian Nodal-Te Voy A Olvidar.mp3"
    },
    {
        name: "Sabor a Mi",
        artist: "Luis Miguel",
        image: "luismiguel.jpg",
        path: "Sabor a Mi.mp3"
    },
    {
        name: "La Intención",
        artist: "Christian Nodal x Peso Pluma ",
        image: "PespoChrisPic.jpg",
        path: "Christian Nodal, Peso Pluma - La Intención.mp3"
    },
    {
        name: "Ya No Somos Ni Seremos",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
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
