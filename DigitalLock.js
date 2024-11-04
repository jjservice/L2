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


function toggleClass(){

    const body = document.querySelector('body');
    body.classList.toggle('light');
    
    }

    let LoggedIn = false;
    let username;
    let password;
    
    while(!LoggedIn){
        username = window.prompt('WRITE: LOLLITA');
        password = window.prompt(`WRITE: IS THE POP`);
    
        if(username === "LOLLITA" && password === "IS THE POP"){
            LoggedIn = true; 
            console.log("Login successful");
               } 
        else {
            console.log("Incorrect username or password");
        }
    
    }