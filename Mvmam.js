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
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name: "A CUALTA MI GATA",
        artist: "Omega El Fuerte",
        img: "omegapic.jpg",
        music: "Omega-A Cualta Mi Gata.mp3"
    },
    {
        name: "Con Quién Te Olvido",
        artist: "Ala Jaza",
        img: "ALAJAPICCCC.jpg",
        music: "Ala Jaza - Con Quién Te Olvido.mp3"
    },
    {
        name: "LA NOTA",
        artist: "GABRIEL PAGAN x OMEGA",
        img: "GABRIELOMEGAPIC.jpg",
        music: "GABRIEL PAGAN  OMEGA - LA NOTA.mp3"
    },
    {
        name: "Si antes te hubiera conocido",
        artist: "Karol G",
        img: "MECUROPIC.jpg",
        music: "KAROL G - Si Antes Te Hubiera Conocido.mp3"
    },
    {
        name: "EL MERENGUE",
        artist: "Marshmello x Manuel Turizo ",
        img: "ManuelTurizoMerenguwPic.jpg",
        music: "Marshmello, Manuel Turizo - El Merengue.mp3"
    },
    {
        name: "Tu Mayimbe",
        artist: "Sujeto Oro 24 ",
        img: "SUJETOPIC3333.jpg",
        music: "sujeto Oro 24 - Tu Mayimbe.mp3"
    },
    {
        name: "Vieja Dale Dale",
        artist: "Toño Rosario",
        img: "TonoRosariPic.jpg",
        music: "Toño Rosario - Vieja Dale Dale.mp3"
    },
    {
        name: "PEPAS",
        artist: "Ala Jaza",
        img: "ALAJAZApIC3333.jpg",
        music: "ALAJAZA-PEPAS.mp3"
    },
    {
        name: "To' la Mujeres Rapan",
        artist: "Amarfis Y la banda de Atakke",
        img: "AmarfisPic1.jpg",
        music: "Amarfis Y la banda de Atakke-To' la Mujeres Rapan.mp3"
    },
    {
        name: "Mi Forma De Ser",
        artist: "Ala Jaza",
        img: "ALAJAPICCCC.jpg",
        music: "Ala Jaza - Mi Forma De Ser.mp3"
    },
    {
        name: "No me hable de Gente",
        artist: "Sujeto Oro 24 ",
        img: "SUJETOPIC3333.jpg",
        music: "Sujeto Oro 24 - No me hable de Gente.mp3"
    },
    {
        name: "Simplemente Gracias",
        artist: "Ala Jaza",
        img: "ALAJAPICCCC.jpg",
        music: "Ala Jaza - Simplemente Gracias.mp3"
    },
    {
        name: "HEAVY",
        artist: "Sujeto Oro 24",
        img: "SUJETOPICCCC222222.jpg",
        music: "Sujeto oro 24 - Heavy.mp3"
    },
    {
        name: "Yo Quiero Un Vacilon",
        artist: "Toño Rosario",
        img: "TonoRosariPic.jpg",
        music: "Yo Quiero Un Vacilon.mp3"
    },
    {
        name: "El Guayo",
        artist: "Amarfis y la banda de Atakke",
        img: "amarfispic222.jpg",
        music: "Amarfis y la banda de Atakke-El Guayo.mp3"
    },
    {
        name: "Mi Mundo Lo Controlo Yo",
        artist: "Sujeto Oro 24",
        img: "SujetoMimundoPic.jpg",
        music: "Sujeto Oro 24  -  Mi Mundo Lo Controlo Yo.mp3"
    },
    {
        name: "Ando En La Versace",
        artist: "Omega El Fuerte",
        img: "omegapic.jpg",
        music: "Omega El  Fuerte-Ando En La Versace.mp3"
    },
    {
        name: "BOBO",
        artist: "Sujeto",
        img: "sujetoPic.jpg",
        music: "SUJETO ORO 24 - BOBO.mp3"
    },
    {
        name: "Nadie Se Meta",
        artist: "Ala Jaza",
        img: "ALAJAPICCCC.jpg",
        music: "Ala Jaza - Nadie Se Meta.mp3"
    },
    {
        name: "Toma Lo Que Te Mandé",
        artist: "Toño Rosario",
        img: "TonoRosariPic.jpg",
        music: "Toño Rosario - Toma Lo Que Te Mandé.mp3"
    },
    {
        name: "El Vecino",
        artist: "Sujeto oro 24",
        img: "SUJETOPICCCC222222.jpg",
        music: "Sujeto oro 24-El Vecino.mp3"
    },
    {
        name: "Fariseo",
        artist: "Omega El Fuerte",
        img: "omegapic2.jpg",
        music: "Omaga El Fuerte-Fariseo.mp3"
    },
    {
        name: "SUJETO ORO 24",
        artist: "CUIDATE",
        img: "sujetocuidatepiiccc.jpg",
        music: "SUJETO ORO 24 - CUIDATE.mp3"
    },
    {
        name: "El Pollo",
        artist: "Amarfis y la banda de Atakke",
        img: "AmarfisPic1.jpg",
        music: "Amarfis y la banda de Atakee-El Pollo.mp3"
    },
    {
        name: "NO ME HABLEN DE ELLA",
        artist: "SUJETO 0R0 24",
        img: "SUJETOPIC3333.jpg",
        music: "SUJETO 0R0 24 - NO ME HABLEN DE ELLA.mp3"
    },
    {
        name: "Yemaya",
        artist: "Amarfis Y la banda de Atakke",
        img: "amarfispic333.jpg",
        music: "Amarfis Y la banda de Atakke-Yemaya.mp3"
    },
    {
        name: "TU NO CORRE",
        artist: "SUJETO ORO 24",
        img: "SUJETOPICCCC222222.jpg",
        music: "TU NO CORRE - SUJETO ORO 24.mp3"
    },
    {
        name: "ME VOY PAL PUEBLO",
        artist: "Toño Rosario",
        img: "TONOPIC2222.jpg",
        music: "Toño Rosario - ME VOY PAL PUEBLO.mp3"
    },
    {
        name: "Misericordia",
        artist: "Ala Jaza",
        img: "alajazapic222.jpg",
        music: "Ala Jaza - Misericordia.mp3"
    },
    {
        name: "Weje Weje",
        artist: "Sujeto Oro 24",
        img: "sujetoPic.jpg",
        music: "Sujeto Oro 24 - Weje Weje.mp3"
    },
    {
        name: "Tattoo",
        artist: "Ala Jaza",
        img: "alajazapic44444.jpg",
        music: "Ala Jaza - Tattoo.mp3"
    },
    {
        name: "FUEGO",
        artist: "Tito Swing",
        img: "TitoPic.jpg",
        music: "Tito Swing - Fuego.mp3"
    },
    {
        name: "Tabaco y Ron",
        artist: "Ala Jaza",
        img: "ALAJAZApIC3333.jpg",
        music: "Ala Jaza - Tabaco y Ron.mp3"
    },
    {
        name: "Beso A Beso",
        artist: "Toño Rosario",
        img: "TONOPIC2222.jpg",
        music: "Toño Rosario - Beso A Beso.mp3"
    },
    {
        name: "Quiero Volver A Empezar",
        artist: "Toño Rosario",
        img: "TonoRosariPic.jpg",
        music: "Toño Rosario - Quiero Volver A Empezar.mp3"
    },
    {
        name: "Alegria",
        artist: "Toño Rosario",
        img: "TONOPIC2222.jpg",
        music: "Toño Rosario - Alegria.mp3"
    },
    {
        name: "MI Mamá Me Apunto En la Escuela",
        artist: "Sujeto Oro 24",
        img: "SUJETOPIC3333.jpg",
        music: "Sujeto Oro 24  -  MI Mamá Me Apunto En la Escuela.mp3"
    },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =(track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      (curr_track.duration - durationMinutes * 60)
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}