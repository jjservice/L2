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
       name: "En Mi Mundo",
       artist: "Jasiel Nuñez x Peso Pluma",
       img: "JasielPesoplumaEnmiMundoPIc.jpg",
       music: "En Mi Mundo - Jasiel Nuñez, Peso Pluma.mp3"
    },
    {
        name: "NO ME PESA",
        artist: "Junior H",
        img: "jUNIORhpIC.jpg",
        music: "Junior H-No Me Pesa.mp3"
    },
    {
        name: "CORAZON FRIO",
        artist: "Jasiel Nuñez x DannyLux",
        img: "CorazonFrionJasielNuPic.jpg",
        music: "Jasielcorazonfriomp3.mp3"
    },
    {
        name: "Qué Tal",
        artist: "Christian Nodal",
        img: "chrispic44.jpg",
        music: "Christian Nodal - Qué Tal.mp3"
    },
    {
        name: "MENTE POSITIVA",
        artist: "Junior H",
        img: "JuniorMentePosPic.jpg",
        music: "Junior H - MENTE POSITIVA.mp3"
    },
    {
        name: "Probablemente",
        artist: "Christian Nodal",
        img: "CHRISTIANNODALPIC.jpg",
        music: "Christian Nodal-Probablemente.mp3"
    },
    {
        name: "Mas Altas Que Bajadas",
        artist: "Natanael Cano",
        img: "NatanaelPic22222.jpg",
        music: "Natanael Cano - Mas Altas Que Bajadas.mp3"
    },
    {
        name: "Nace Un Borracho",
        artist: "Christian Nodal",
        img: "CHRISTIANNODALPIC.jpg",
        music: "Christian Nodal - Nace Un Borracho.mp3"
    },
    {
        name: "MORRITAS",
        artist: "Natanael Cano",
        img: "NataMorritaPicx.jpg",
        music: "Natanael Cano - Morritas.mp3"
    },
    {
        name: "NUEVA VIDA",
        artist: "Peso Pluma",
        img: "PesoPlumaPic1111.jpg",
        music: "NUEVA VIDA - Peso Pluma.mp3"
    },
    {
        name: "No te contaron mal",
        artist: "Christian Nodal",
        img: "notecontaronmal.jpg",
        music: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
    },
    {
        name: "Pacas De Billetes",
        artist: "Natanael Cano",
        img: "NatanaelPic.jpg",
        music: "Natanael Cano - Pacas De Billetes.mp3"
    },
    {
        name: "De Los Besos Que Te Di",
        artist: "Christian Nodal",
        img: "CHRISTIANNODALPIC.jpg",
        music: "Christian Nodal - De Los Besos Que Te Di.mp3"
    },
    {
        name: "CARNAL",
        artist: "Peso Pluma x Natanael Cano",
        img: "PESONATAPIC22222.jpg",
        music: "CARNAL - Peso Pluma, Natanael Cano.mp3"
    },
    {
        name: "Por el Resto de Tu Vida",
        artist: "Christian Nodal x TINI",
        img: "chrisporelrestopicc.jpg",
        music: "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
    },
    {
        name: "Según Quién",
        artist: "Maluma x Carin Leon ",
        img: "malumacaripic.jpg",
        music: "Maluma, Carin Leon - Según Quién.mp3"
    },
    {
        name: "POR LAS NOCHES",
        artist: "Peso Pluma",
        img: "PesoPlumaPic1111.jpg",
        music: "Peso Pluma - Por Las Noches.mp3"
    },
    {
        name: "Te Fallé",
        artist: "Christian Nodal",
        img: "chrispic33.jpg",
        music: "Christian Nodal-Te Fallé.mp3"
    },
    {
        name: "BYE",
        artist: "Peso Pluma",
        img: "PESOPLUMABYE.jpg",
        music: "BYE - Peso Pluma.mp3"
    },
    {
        name: "SE AMERITA",
        artist: "Junior H",
        img: "JuniorHPic2222.jpg",
        music: "Junior H-Se Amerita.mp3"
    },
    {
        name: "ANDO SOLTERO",
        artist: "Natanael Cano",
        img: "NataAndoSolteroPic.jpg",
        music: "Ando Soltero - Natanael.mp3"
    },
    {
        name: "ADRENALINA",
        artist: "Natanael Cano x Dan Sanchez",
        img: "NatAdrenalinaPic.jpg",
        music: "Natanael Cano-ADRENALINA.mp3"
    },
    {
        name: "TENGO MOTIVOS",
        artist: "Junior H",
        img: "JunioHPic33333.png",
        music: "Junior H - Tengo Motivos.mp3"
    },
    {
        name: "AFS",
        artist: "Natanael Cano",
        img: "NatanaelPic.jpg",
        music: "Natanael Cano-AFS-MP3.mp3"
    },
    {
        name: "LAGUNAS",
        artist: "Peso Pluma X Jasiel Nuñez",
        img: "PESOJASLAGUNASPIC.jpeg",
        music: "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
    },
    {
        name: "CIELO ETERNO",
        artist: "Jasiel Núñez x ",
        img: "JASIELNUPICCC.jpg",
        music: "cielo-eterno-jasiel-nunez-dannyluxMP33.mp3"
    },
    {
        name: "BACCARAT",
        artist: "Natanael Cano & Peso Pluma",
        img: "PESONATAPIC22222.jpg",
        music: "Baccarat - Natanael Cano & Peso Pluma.mp3"
    },
    {
        name: "ROSA PASTEL",
        artist: "Peso Pluma x Jasiel Nuñez",
        img: "PesoJasiel-RossaPaPic.jpg",
        music: "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
    },
    {
        name: "Aquí Abajo",
        artist: "Christian Nodal",
        img: "CHRISTIANNODALPIC.jpg",
        music: "Christian Nodal - Aquí Abajo.mp3"
    },
    {
        name: "BIPOLAR",
        artist: "Peso Pluma, Jasiel Nuñez, Junior H",
        img: "PesoJaieslJunirHPIC.jpg",
        music: "Peso Pluma, Jasiel Nuñez, Junior H-bipolar.mp3"
    },
    {
        name: "Cuando La Vida Sea Trago",
        artist: "Carin León",
        img: "CARINLEONCUANLAVIDASEAPIC.jpg",
        music: "Carin León - Cuando La Vida Sea Trago.mp3"
    },
    {
        name: "AMG",
        artist: "Natanael Cano x Gabito Ballesteros x Peso Pluma",
        img: "PesoNatAmgPic.jpg",
        music: "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
    },
    {
        name: "No Me Llores",
        artist: "Carin Leon x Manuel Carrasco",
        img: "carinmanuepic.jpg",
        music: "Carin León, Manuel Carrasco - No Me Llores.mp3"
    },
    {
        name: "PRC",
        artist: "Peso Pluma x Natanael Cano",
        img: "PesoNatPic.jpg",
        music: "Peso Pluma, Natanael Cano - PRC.mp3"
    },
    {
        name: "No Es Por Acá",
        artist: "Carin Leon",
        img: "noesporacapic.jpg",
        music: "Carin Leon - No Es Por Acá.mp3"
    },
    {
        name: "Kbron y Medio",
        artist: "Christian Nodal",
        img: "chrispic11.jpg",
        music: "Christian Nodal - Kbron y Medio.mp3"
    },
    {
        name: "La Siguiente",
        artist: "Kany García x Christian Nodal",
        img: "lasiguientepic.jpg",
        music: "Kany García, Christian Nodal - La Siguiente.mp3"
    },
    {
        name: "La Bachatita",
        artist: "Christian Nodal",
        img: "chrispic33.jpg",
        music: "Christian Nodal - La Bachatita.mp3"
    },
    {
        name: "Igualito A Mi Apá",
        artist: "Fuerza Regida X Peso Pluma",
        img: "PesoFuerzaPIc.jpg",
        music: "Fuerza Regida X Peso Pluma - Igualito A Mi Apá.mp3"
    },
    {
        name: "Y LLORO",
        artist: "Junior H",
        img: "jUNIORhpIC.jpg",
        music: "Junior H - Y LLORO.mp3"
    },
    {
        name: "Me Dejé Llevar",
        artist: "Christian Nodal",
        img: "chrispic33.jpg",
        music: "Christian Nodal-Me Dejé Llevar.mp3"
    },
    {
        name: "Confieso",
        artist: "Kany García ",
        img: "kanypic.jpg",
        music: "Kany García - Confieso.mp3"
    },
    {
        name: "Vamos Para Arriba",
        artist: "Junior H Ft. Gabito Ballesteros",
        img: "JunioGabitoPic.jpg",
        music: "Vamos Para Arriba - Junior H Ft. Gabito Ballesteros.mp3"
    },
    {
        name: "Ojalá",
        artist: "Christian Nodal",
        img: "chrispic44.jpg",
        music: "Christian Nodal-Ojalá.mp3"
    },
    {
        name: "LA GLORIA ERES TU",
        artist: "Luis Miguel",
        img: "luismiguel.jpg",
        music: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3"
    },
    {
        name: "Te Lo Agradezco",
        artist: "Kany Garcia x Carin Leon ",
        img: "teloagradezcopic.jpg",
        music: "Kany Garcia x Carin Leon - Te Lo Agradezco.mp3"
    },
    {
        name: "Eres",
        artist: "Christian Nodal",
        img: "chrispic44.jpg",
        music: "Christian Nodal-Eres.mp3"
    },
    {
        name: "Te Voy A Olvidar",
        artist: "Christian Nodal",
        img: "chrispic33.jpg",
        music: "Christian Nodal-Te Voy A Olvidar.mp3"
    },
    {
        name: "Sabor a Mi",
        artist: "Luis Miguel",
        img: "luismiguel.jpg",
        music: "Sabor a Mi.mp3"
    },
    {
        name: "La Intención",
        artist: "Christian Nodal x Peso Pluma ",
        img: "PespoChrisPic.jpg",
        music: "Christian Nodal, Peso Pluma - La Intención.mp3"
    },
    {
        name: "Ya No Somos Ni Seremos",
        artist: "Christian Nodal",
        img: "CHRISTIANNODALPIC.jpg",
        music: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
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