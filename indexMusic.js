const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");

const tracks = [
   {
       name: "SAUCEBOY (Freestyle)",
       artist: "Eladio Carrión",
       image: "./EladioCarrionSauceBoyPic.jpg",
       music: "Eladio Carrión - SAUCEBOY (Freestyle).mp3"
   },
   {
       name: "Cuando Me Ven",
       artist: "Myke Towers",
       image: "./1MYKEPIC1.jpg",
       music: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
   },
   {
       name: "Alto Riesgo",
       artist: "Myke Towers",
       image: "./MYKEPIC3333.jpg",
       music: "Myke Towers - Alto Riesgo.mp3"
   },
   {
       name: "Ajedréz",
       artist: "Myke Towers",
       image: "./mykepic4.jpg",
       music: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
   },
   {
       name: "TOUCHDOWN",
       artist: "Messiah, Myke Towers",
       image: "./MessiahMikeTouchDownPic.jpg",
       music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
   },
   {
       name: "Hablame",
       artist: "Frankie Ruiz",
       image: "./frankiepic2.jpg",
       music: "./Frankie Ruiz-Hablame.mp3"
   },
   {
       name: "Deseandote",
       artist: "Frankie Ruiz",
       image: "./frankiepic3.jpg",
       music: "./Frankie Ruiz-Deseandote.mp3"
   },
   {
       name: "El Camionero",
       artist: "Frankie Ruiz",
       image: "./frankiepic2.jpg",
       music: "./Frankie Ruiz-El Camionero.mp3",
   },
   {
       name: "Mirandote",
       artist: "Frankie Ruiz",
       image: "./frankiepic3.jpg",
       music: "./Frankie Ruiz-Mirándote.mp3"
   },
   {
       name: "Seda",
       artist: "Bad Bunny x Bryant Myers",
       image: "./BadBunnyBryinSedaPic.jpg",
       music: "./Bad Bunny, Bryant Myers - Seda.mp3",
   },
   { 
       name: "Lost The Love",
       artist: "BigXthaPlug",
       image: "./bigxpicccccc.png",
       music: "./BigXthaPlug - Lost The Love.mp3"
   },
   {
       name: "Crypto",
       artist: "Miky Woodz",
       image: "./mikypic5555.jpg",
       music: "./Miky Woodz - CRYPTO.mp3",
   },
   {
       name: "Law & Order",
       artist: "BigXthaPlug",
       image: "./BigXLawOrderPic.jpg",
       music: "./BigXthaPlug - Law & Order.mp3",
   },
   {
       name: "Good Drank",
       artist: "2 Chainz ft Quavo x Gucci Mane",
       image: "./2chainGodDrunkPic.jpg",
       music: "./2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3",
   },
   {
       name: "Bala",
       artist: "Ceky Viciny x Yaisel LM",
       image: "./CekyYasielBalaPic.jpg",
       music: "./Ceky Viciny x Yaisel LM - Bala.mp3",
   },
   {
       name: "Diet Coke",
       artist: "Pusha T",
       image: "./PushaTPic.jpg",
       music: "./Pusha T - Diet Coke.mp3",
   },
   {
       name: "Cielo Eterno",
       artist: "Jasiel Nuñez",
       image: "./JASIELNUPICCC.jpg",
       music: "./cielo-eterno-jasiel-nunez-dannyluxMP33.mp3",
   },
   {
       name: "Por Mi Lau",
       artist: "Miky Woodz",
       image: "./mikypicc44444.jpg",
       music: "./Miky Woodz - Por Mi Lau.mp3",
   },

];

let currentTrackIndex = 0;

// Function to update and play the track
function updateTrack() {
   const track = tracks[currentTrackIndex];
   audioPlayer.src = track.music;
   audioPlayer.load(); // Ensures that the audio is loaded
   

   // Update UI with song info
   document.getElementById("songName").innerText = track.name;
   document.getElementById("artistName").innerText = track.artist;
   document.getElementById("songImage").src = track.image;

   // Change play/pause button icon
   playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Play/Pause button event listener
playPauseBtn.addEventListener("click", () => {
   if (audioPlayer.paused) {
       audioPlayer.play();
       playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
   } else {
       audioPlayer.pause();
       playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
   }
});

// Next button event listener
nextBtn.addEventListener("click", () => {
   currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
   updateTrack();
   audioPlayer.play(); // Start playing immediately
});

// Previous button event listener
prevBtn.addEventListener("click", () => {
   currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
   updateTrack();
   audioPlayer.play(); // Start playing immediately
});

// Random button event listener
randomBtn.addEventListener("click", () => {
   currentTrackIndex = Math.floor(Math.random() * tracks.length);
   updateTrack();
   audioPlayer.play(); // Start playing immediately
});

// When the audio ends, automatically play the next track
audioPlayer.addEventListener("ended", () => {
   nextBtn.click();
});

// Initialize the player with the first track
updateTrack();

