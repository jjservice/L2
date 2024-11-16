// Watch Section ///////////////////////////
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// Lights Section //////////////////////////////////
function toggleClass(){

    const body = document.querySelector('body');
    body.classList.toggle('light');
    
    }

// Sound Click Effect Section /////////////////////////
    
var audio = document.getElementById("BoxingBell");
// Set the volume to 0.20 //
audio.volume = 0.20;
// Set the loop to false to play the sound, only when clicking //
audio.loop = false;
// Function to play the audio when the Btn is clicked //
function bleepAudio() {
    audio.play();
} 