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
        name: "Law & Order",
        artist: "BigXthaPlug",
        img: "BigXLawOrderPic.jpg",
        music: "BigXthaPlug - Law & Order.mp3"
    },
    {
        name: "Lost The Love",
        artist: "BigXthaPlug",
        img: "BigxLastPic.jpg",
        music: "BigXthaPlug - Lost The Love.mp3"
    },
    {
        name: "Dope Boy",
        artist: "Young Thug x Nigo",
        img: "YoungThughNigoDopeBoyPic.jpg",
        music: "Young Thug, Nigo - Dope Boy.mp3"
    },
    {
        name: "Take Care",
        artist: "BigXthaPlug",
        img: "BigxLastPic.jpg",
        music: "BigXthaPlug - Take Care.mp3"
    },
    {
        name: "Luv Again",
        artist: "Ruger",
        img: "RugerLuvAgainPic.jpg",
        music: "Ruger - Luv Again.mp3"
    },
    {
        name: "The Largest",
        artist: "BigXThaPlug",
        img: "BigXTheLargestPic.jpg",
        music: "BigXthaPlug - The Largest.mp3"
    },
    {
        name: "Change Me",
        artist: "BigXthaPlug",
        img: "BigXcHangeMePic.jpg",
        music: "BigXthaPlug - Change Me.mp3"
    },
    {
        name: "Whip It",
        artist: "BigXThaPlug",
        img: "BigXThatPlug11111.jpg",
        music: "BigXthaPlug - Whip It (Official Audio).mp3"
    },
    {
        name: "Fight Night",
        artist: "Migos",
        img: "MigosPic1.jpg",
        music: "Migos - Fight Night.mp3"
    },
    {
        name: "Back on my Bs",
        artist: "BigXthaPlug",
        img: "backbspic.jpg",
        music: "BigXthaPlug  - Back On My BS [Official Lyric Video].mp3"
    },
    {
        name: "Million Dollar Baby",
        artist: "Tommy Richman",
        img: "milliondollarpic.jpg",
        music: "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
    },
    {
        name: "Need It",
        artist: "Migos ft. YoungBoy Never Broke Again",
        img: "MigosIneedItPic.jpg",
        music: "Migos  ft. YoungBoy Never Broke Again- Need It.mp3"
    },
    {
        name: "Big Stepper",
        artist: "BigXThaPlug",
        img: "BigXThatPlug11111.jpg",
        music: "BigXThaPlug - Big Stepper.mp3"
    },
    {
        name: "Back Then",
        artist: "Mike Jones",
        img: "MikeJonesPic.jpg",
        music: "Mike Jones-Back Then.mp3"
    },
    {
        name: "PLAIN JANE",
        artist: "A$AP Ferg",
        img: "AsaFergPic.jpg",
        music: "A$AP Ferg - Plain Jane.mp3"
    },
    {
        name: "Emotionally Scarred",
        artist: "Lil Baby",
        img: "LilBbayPic2.webp",
        music: "Lil Baby - Emotionally Scarred.mp3"
    },
    {
        name: "Rap Niggas",
        artist: "BigXthaPlug ",
        img: "BigXThatPlug11111.jpg",
        music: "BigXthaPlug - Rap Niggas.mp3"
    },
    {
        name: "I Get The Bag",
        artist: "Gucci Mane ft Migos",
        img: "IgetThebagPic.jpg",
        music: "Gucci Mane ft Migos - I Get The Bag [Audio].mp3"
    },
    {
        name: "TOO FAST",
        artist: "Future",
        img: "futuretoofastpic.jpg",
        music: "Future - TOO FAST.mp3"
    },
    {
        name: "Lakers",
        artist: "BigXThaPlug ft. Ro$ama",
        img: "BixLakersPic.jpg",
        music: "BigXthaPlug  - '02 Lakers feat  Ro$ama.mp3"
    },
    {
        name: "HOTEL LOBBY",
        artist: "Quavo & Takeoff",
        img: "MigosHotelPic.jpg",
        music: "Quavo & Takeoff - HOTEL LOBBY.mp3"
    },
    {
        name: "California Breeze",
        artist: "Lil Baby",
        img: "LilBabyPic.jpg",
        music: "Lil Baby - California Breeze.mp3"
    },
    {
        name: "Climate",
        artist: "BigXthaPlug Ft Offset",
        img: "BigOffClimPic.jpg",
        music: "BigXthaPlug Ft Offset - Climate.mp3"
    },
    {
        name: "Good Drank",
        artist: "2 Chainz ft Quavo, Gucci Mane",
        img: "2chainGodDrunkPic.jpg",
        music: "2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3"
    },
    {
        name: "PRIMETIME",
        artist: "BigXThaPlug",
        img: "BIGXPICC.jpg",
        music: "BigXthaPlug - Primetime.mp3"
    },
    {
        name: "Shorty Wanna Ride",
        artist: "Young Buck",
        img: "YoungBuckPic.jpg",
        music: "Young Buck -  Shorty Wanna Ride.mp3"
    },
    {
        name: "Badu Flow",
        artist: "BigXthaPlug",
        img: "bigxpicccccc.png",
        music: "BigXthaPlug - Badu Flow.mp3"
    },
    {
        name: "Mr.Trouble",
        artist: "BigXThaPlug",
        img: "BIGXPICC.jpg",
        music: "BigXThaPlug _Mr.Trouble.mp3"
    },
    {
        name: "Ric Flair Drip",
        artist: "Offset & Metro Boomin",
        img: "Ricflarsonpic.jpg",
        music: "Offset & Metro Boomin  - Ric Flair Drip.mp3"
    },
    {
        name: "Straightenin",
        artist: "Migos",
        img: "MigosCulturPic.jpg",
        music: "Migos - Straightenin (Audio).mp3"
    },
    {
        name: "Back On",
        artist: "Quality Control x Lil Baby",
        img: "LilBabyPic.jpg",
        music: "Quality Control, Lil Baby - Back On.mp3"
    },
    {
        name: "PESO",
        artist: "A$AP Rocky",
        img: "ASAPPIC222.jpg",
        music: "A$AP Rocky - Peso.mp3"
    },
    {
        name: "OOOUUU",
        artist: "Young MA",
        img: "YounOUUUPIC.jpg",
        music: "Young MA-OOOUUU.mp3"
    },
    {
        name: "Praise The Lord",
        artist: "A$AP Rocky Ft. Skepta",
        image: "ASAPPIC1.jpg",
        music: "A$AP Rocky Ft. Skepta- Praise The Lord.mp3"
    },
    {
        name: "Active",
        artist: "BigXthaPlug",
        img: "BigXactivePic.jpg",
        music: "BigXthaPlug - Active (Official Music Video).mp3"
    },
    {
        name: "OFFICER RICKY",
        artist: "50 Cent",
        img: "50centPic.jpg",
        music: "50 Cent - Officer Ricky.mp3"
    },
    {
        name: "Get Buck",
        artist: "Young Buck",
        img: "YoungBuckPic.jpg",
        music: "Young Buck-Get Buck.mp3"
    },
    {
        name: "Close Friends",
        artist: "Lil Baby x Gunna",
        img: "LilCloseFPic.jpg",
        music: "Lil Baby, Gunna - Close Friends.mp3"
    },
    {
        name: "Still Tippin",
        artist: "Miike Jones ft. Slim Thug and Paul Wall",
        img: "MikeJonesPic.jpg",
        music: "Still Tippin' (feat. Slim Thug and Paul Wall).mp3"
    },
    {
        name: "Sippin On Some Syrup",
        artist: "3Six Mafia",
        img: "3SixMafia-Sippin.jpg",
        music: "3SixMafia-Sippin On Some Syrup.mp3"
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