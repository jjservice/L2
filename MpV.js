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
        name: "SEDA",
        artist: "Bad Bunny x Bryant Myers",
        img: "BadBunnyBryinSedaPic.jpg",
        music: "Bad Bunny, Bryant Myers - Seda.mp3"
    },
    {
        name: "No Soy Mujeriego",
        artist: "Nino Freestyle",
        img: "NinoFreestylePic.avif",
        music: "Nino Freestyle - No Soy Mujeriego.mp3"
    },
    {
        name: "Astronauto",
        artist: "Almighty",
        img: "AlmightyPicx.jpg",
        music: "Almighty- Astronauto.mp3"
    },
    {
        name: "ORGANICO",
        artist: "Jamby El Favo",
        img: "JambyOrganicoPic.jpg",
        music: "Jamby El Favo - Orgánico.mp3"
    },
    {
        name: "Pila De Cotorra",
        artist: "El Fother x Darlyn Nay",
        img: "FotherDarlinPilaDeCotorraPic.jpg",
        music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
    },
    {
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        img: "ninoyomelPic.jpg",
        music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {
        name: "KIANA",
        artist: "Tali Goya",
        img: "TALIPIC.jpg",
        music: "Tali Goya - Kianna (Tiradera a Lito Kirino).mp3"
    },
    {
        name: "Pana Mío",
        artist: "Polakan Ft. Melymel",
        img: "panamiopic.jpg",
        music: "Polakan Ft. Melymel - Pana Mío.mp3"
    },
    {
        name: "EL MEJOR",
        artist: "Nino Freestyle",
        img: "NinoFreeElMejorPic.jpg",
        music: "Nino Freestyle - El Mejor  2 Millones De Seguidores.mp3"
    },
    {
        name: "PASSOA",
        artist: "Jhayco x Kapo",
        img: "JhayKapoPassoaPic.jpg",
        music: "JHAYCO, Kapo - Passoa.mp3"
    },
    {
        name: "CRYPTO",
        artist: "Miky Woodz",
        img: "mikypic5555.jpg",
        music: "Miky Woodz - CRYPTO.mp3"
    },
    {
        name: "Mujeres Como Tu",
        artist: "Lapiz Conciente X Shadow Blow",
        img: "LAPIZSHADOWPIC.jpg",
        music: "Lapiz Conciente ft. Shadow Blow - Mujeres Como Tu.mp3"
    },
    {
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - Por Mi Lau.mp3"
    },
    {
        name: "27 Mensajes",
        artist: "Shadow Blow X Lapiz Conciente",
        img: "LAPIZSHADOWPIC.jpg",
        music: "Shadow Blow  Lapiz Conciente  27 Mensajes.mp3"
    },
    {
        name: "Otra Vez",
        artist: "El Fother , Mestizo Is Back",
        img: "MestizoFotheOtraVezrPic.jpg",
        music: "El Fother , Mestizo Is Back - Otra Vez.mp3"
    },
    {
        name: "LA MAFIA",
        artist: "Anuel AA",
        img: "ANUELLAMAFIAPICCC.jpg",
        music: "ANUEL AA - LA MAFIA.mp3"
    },
    {
        name: "Where You At",
        artist: "Lito Kirino",
        img: "LitoKirinoWhereuatPic.jpg",
        music: "Lito Kirino - Where You At.mp3"
    },
    {
        name: "BAJA Y SUBE",
        artist: "Rokero x Luar La L",
        img: "LualLSubeBajPic.jpg",
        music: "Rokero x Luar La L - Baja y Sube.mp3"
    },
    {
        name: "SOLITA",
        artist: "Ozuna, Bad Bunny, Wisin, Almighty",
        img: "SolitaRemmixPic.jpg",
        music: "Ozuna, DJ Luian, Mambo Kingz - Solita (Audio) ft. Bad Bunny, Wisin, Almighty.mp3"
    },
    {
        name: "KINGDOM",
        artist: "Tali Goya",
        img: "TALIGOYAkINDOMPIC.jpg",
        music: "Tali Goya - Kingdom.mp3"
    },
    {
        name: "BACK TO BACK",
        artist: "BRAULIO FOGON X LUIS BROWN",
        img: "fogobackPic.jpg",
        music: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
    },
    {
        name: "ASEGURAO",
        artist: "Shadow Blow X Lapiz Conciente",
        img: "SHADOWLAPIS5555.jpg",
        music: "Shadow Blow  Lapiz Conciente - ASEGURAO.mp3"
    },
    {
        name: "Solo $exo",
        artist: "Myke Towers",
        img: "mykepic2.jpg",
        music: "Myke Towers - Solo $exo.mp3"
    },
    {
        name: "Pauta y Flow",
        artist: "Myke Towers",
        img: "mykepic4.jpg",
        music: "Myke Towers - Pauta y Flow.mp3"
    },
    {
        name: "777",
        artist: "Lito Kirino ft. Tali",
        img: "777PIC.jpg",
        music: "Lito Kirino - 777 ft. Tali.mp3"
    },
    {
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
    {
        name: "Freestyle 8",
        artist: "Mandrake",
        img: "MANDRAKEPIC2.jpg",
        music: "Mandrake - Freestyle 8.mp3"
    },
    {
        name: "FreeStyle 5",
        artist: "ManDrake El MaloCorita",
        img: "MANDRAKEPIC1.jpg",
        music: "ManDrake El MaloCorita - FreeStyle 5.mp3"
    },
    {
        name: "FreeStyle 4",
        artist: "Mandrake El Malocorita",
        img: "MANDRAKEPIC3.jpg",
        music: "Mandrake El Malocorita - FreeStyle 4.mp3"
    },
    {
        name: "31",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - 31.mp3"
    },
    {
        name: "OG CITY",
        artist: "Miky Woodz",
        img: "MIKYPIC33333.jpg",
        music: "Miky Woodz - OG CITY.mp3"
    },
    {
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        img: "LUALLPICCC1111.jpg",
        music: "Luar La L & Sinfonico - Drip.mp3"
    },
    {
        name: "La Pieza",
        artist: "Luar La L",
        img: "LUAPIC333.jpg",
        music: "La Pieza - Luar La L.mp3"
    },
    {
        name: "Alto Riesgo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Alto Riesgo.mp3"
    },
    {
        name: "Joven Leyenda",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Joven Leyenda.mp3"
    },
    {
        name: "Dígitos",
        artist: "Arcangel X Myke Towers",
        img: "MIKEARCPICCC.jpg",
        music: "Arcangel, Myke Towers -Dígitos.mp3"
    },
    {
        name: "Los Angeles",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Los Angeles.mp3"
    }, 
    {
        name: "Atras del Peso",
        artist: "Mozart La Para x Black Jonas Point",
        img: "ATRASDELPESOPICCCCC.jpg",
        music: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
    },
    {
        name: "Ajedrez",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {
        name: "Cuando me Ven",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {
        name: "34.PFA",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {
        name: "Tú No Ta'",
        artist: "Lapiz Conciente",
        img: "LAPIZPIC222222.jpg",
        music: "Lapiz Conciente - Tú No Ta'.mp3"
    },
    {
        name: "9 Dias",
        artist: "Lapiz Conciente",
        img: "lapizPi.jpg",
        music: "Lapiz Conciente - 9 Dias.mp3"
    },
    {
        name: "Que Esta Pasando",
        artist: "El Jincho",
        img: "JINCHOPIC.jpg",
        music: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
    },
    {
        name: "EL NUEVO PAPA",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "QUIMICO_NUEVO_PAPA.mp3"
    },
    {
        name: "Demasiado Yagala",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
    },
    {
        name: "Living Life",
        artist: "Miky Woodz",
        img: "MIKYWOODS.jpg",
        music: "Miky Woodz  - Living Life (Video Oficial).mp3"
    },
    {
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        img: "NENGODARPIC.jpg",
        music: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {
        name: "TA TO SALDO",
        artist: "Miky Woodz ft Myke Towers",
        img: "TATOSALDOPIC.jpg",
        music: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
    },
    {
        name: "Jovenes Millonarios",
        artist: "Eladio Carrion ft Myke Towers",
        img: "JMILLONARIOSPIC.jpg",
        music: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
    },
    {
        name: "Fast Money",
        artist: "Ñengo Flow ft Myke Towers",
        img: "FASTMONEYPC.jpg",
        music: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {
        name: "OBVIO",
        artist: "Myke Towers",
        img: "MykeObvioPIC.jpg",
        music: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {
        name: "Trending",
        artist: "Dei V ft Myke Towers",
        img: "TrendiDeiviTowerPic.jpg",
        music: "Dei V, Myke Towers - Trending Remix (LetraLyrics).mp3"
    },
    {
        name: "La Música No Miente",
        artist: "Lapiz Conciente",
        img: "lapizPi.jpg",
        music: "Lapiz Conciente - La Música No Miente.mp3"
    },
    {
        name: "Respeten o Respeten",
        artist: "Maiky el antivirus musical",
        img: "maikyima3.jpg",
        music: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
    },
    {
        name: "Mi Progreso",
        artist: "Maiky el antivirus musical",
        img: "miprogresopic.jpg",
        music: "Mi progreso-Maiky el antivirus musical .mp3"
    },
    {
        name: "Megvtron",
        artist: "YoungChimi",
        img: "younChimmi.jpg",
        music: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
    },
    {
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
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