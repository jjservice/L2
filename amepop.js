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
        name: "Change Me",
        artist: "BigXthaPlug",
        image: "BigXcHangeMePic.jpg",
        path: "BigXthaPlug - Change Me.mp3"
    },
    {
        name: "Dope Boy",
        artist: "Young Thug x Nigo",
        image: "YoungThughNigoDopeBoyPic.jpg",
        path: "Young Thug, Nigo - Dope Boy.mp3"
    },
    {
        name: "Luv Again",
        artist: "Ruger",
        image: "RugerLuvAgainPic.jpg",
        path: "Ruger - Luv Again.mp3"
    },
    {
        name: "The Largest",
        artist: "BigXThaPlug",
        image: "BigXTheLargestPic.jpg",
        path: "BigXthaPlug - The Largest.mp3"
    },
    {
        name: "PLAIN JANE",
        artist: "A$AP Ferg",
        image: "AsaFergPic.jpg",
        path: "A$AP Ferg - Plain Jane.mp3"
    },
    {
        name: "Whip It",
        artist: "BigXThaPlug",
        image: "BigXThatPlug11111.jpg",
        path: "BigXthaPlug - Whip It (Official Audio).mp3"
    },
    {
        name: "Fight Night",
        artist: "Migos",
        image: "MigosPic1.jpg",
        path: "Migos - Fight Night.mp3"
    },
    {
        name: "Back on my Bs",
        artist: "BigXthaPlug",
        image: "backbspic.jpg",
        path: "BigXthaPlug  - Back On My BS [Official Lyric Video].mp3"
    },
    {
        name: "Million Dollar Baby",
        artist: "Tommy Richman",
        image: "milliondollarpic.jpg",
        path: "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
    },
    {
        name: "Need It",
        artist: "Migos ft. YoungBoy Never Broke Again",
        image: "MigosIneedItPic.jpg",
        path: "Migos  ft. YoungBoy Never Broke Again- Need It.mp3"
    },
    {
        name: "Big Stepper",
        artist: "BigXThaPlug",
        image: "BigXThatPlug11111.jpg",
        path: "BigXThaPlug - Big Stepper.mp3"
    },
    {
        name: "Back Then",
        artist: "Mike Jones",
        image: "MikeJonesPic.jpg",
        path: "Mike Jones-Back Then.mp3"
    },
    {
        name: "Emotionally Scarred",
        artist: "Lil Baby",
        image: "LilBbayPic2.webp",
        path: "Lil Baby - Emotionally Scarred.mp3"
    },
    {
        name: "Rap Niggas",
        artist: "BigXthaPlug ",
        image: "BigXThatPlug11111.jpg",
        path: "BigXthaPlug - Rap Niggas.mp3"
    },
    {
        name: "I Get The Bag",
        artist: "Gucci Mane ft Migos",
        image: "IgetThebagPic.jpg",
        path: "Gucci Mane ft Migos - I Get The Bag [Audio].mp3"
    },
    {
        name: "TOO FAST",
        artist: "Future",
        image: "futuretoofastpic.jpg",
        path: "Future - TOO FAST.mp3"
    },
    {
        name: "Lakers",
        artist: "BigXThaPlug ft. Ro$ama",
        image: "BixLakersPic.jpg",
        path: "BigXthaPlug  - '02 Lakers feat  Ro$ama.mp3"
    },
    {
        name: "HOTEL LOBBY",
        artist: "Quavo & Takeoff",
        image: "MigosHotelPic.jpg",
        path: "Quavo & Takeoff - HOTEL LOBBY.mp3"
    },
    {
        name: "California Breeze",
        artist: "Lil Baby",
        image: "LilBabyPic.jpg",
        path: "Lil Baby - California Breeze.mp3"
    },
    {
        name: "Climate",
        artist: "BigXthaPlug Ft Offset",
        image: "BigOffClimPic.jpg",
        path: "BigXthaPlug Ft Offset - Climate.mp3"
    },
    {
        name: "Good Drank",
        artist: "2 Chainz ft Quavo, Gucci Mane",
        image: "2chainGodDrunkPic.jpg",
        path: "2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3"
    },
    {
        name: "PRIMETIME",
        artist: "BigXThaPlug",
        image: "BIGXPICC.jpg",
        path: "BigXthaPlug - Primetime.mp3"
    },
    {
        name: "Shorty Wanna Ride",
        artist: "Young Buck",
        image: "YoungBuckPic.jpg",
        path: "Young Buck -  Shorty Wanna Ride.mp3"
    },
    {
        name: "Badu Flow",
        artist: "BigXthaPlug",
        image: "bigxpicccccc.png",
        path: "BigXthaPlug - Badu Flow.mp3"
    },
    {
        name: "Mr.Trouble",
        artist: "BigXThaPlug",
        image: "BIGXPICC.jpg",
        path: "BigXThaPlug _Mr.Trouble.mp3"
    },
    {
        name: "Ric Flair Drip",
        artist: "Offset & Metro Boomin",
        image: "Ricflarsonpic.jpg",
        path: "Offset & Metro Boomin  - Ric Flair Drip.mp3"
    },
    {
        name: "Straightenin",
        artist: "Migos",
        image: "MigosCulturPic.jpg",
        path: "Migos - Straightenin (Audio).mp3"
    },
    {
        name: "Back On",
        artist: "Quality Control x Lil Baby",
        image: "LilBabyPic.jpg",
        path: "Quality Control, Lil Baby - Back On.mp3"
    },
    {
        name: "PESO",
        artist: "A$AP Rocky",
        image: "ASAPPIC222.jpg",
        path: "A$AP Rocky - Peso.mp3"
    },
    {
        name: "OOOUUU",
        artist: "Young MA",
        image: "YounOUUUPIC.jpg",
        path: "Young MA-OOOUUU.mp3"
    },
    {
        name: "Praise The Lord",
        artist: "A$AP Rocky Ft. Skepta",
        image: "ASAPPIC1.jpg",
        path: "A$AP Rocky Ft. Skepta- Praise The Lord.mp3"
    },
    {
        name: "Active",
        artist: "BigXthaPlug",
        image: "BigXactivePic.jpg",
        path: "BigXthaPlug - Active (Official Music Video).mp3"
    },
    {
        name: "OFFICER RICKY",
        artist: "50 Cent",
        image: "50centPic.jpg",
        path: "50 Cent - Officer Ricky.mp3"
    },
    {
        name: "Get Buck",
        artist: "Young Buck",
        image: "YoungBuckPic.jpg",
        path: "Young Buck-Get Buck.mp3"
    },
    {
        name: "Close Friends",
        artist: "Lil Baby x Gunna",
        image: "LilCloseFPic.jpg",
        path: "Lil Baby, Gunna - Close Friends.mp3"
    },
    {
        name: "Still Tippin",
        artist: "Miike Jones ft. Slim Thug and Paul Wall",
        image: "MikeJonesPic.jpg",
        path: "Still Tippin' (feat. Slim Thug and Paul Wall).mp3"
    },
    {
        name: "Sippin On Some Syrup",
        artist: "3Six Mafia",
        image: "3SixMafia-Sippin.jpg",
        path: "3SixMafia-Sippin On Some Syrup.mp3"
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
