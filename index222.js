// Your web app's Firebase configuration (already provided)
const firebaseConfig = {
    apiKey: "AIzaSyDCG0j5LN8sE1vE7viRCkH5r84-Yf8f6uo",
    authDomain: "message-app-29ab4.firebaseapp.com",
    databaseURL: "https://message-app-29ab4-default-rtdb.firebaseio.com",
    projectId: "message-app-29ab4",
    storageBucket: "message-app-29ab4.firebasestorage.app",
    messagingSenderId: "490264790429",
    appId: "1:490264790429:web:41f1d58f0bd48d064e5b74",
    measurementId: "G-3D9Q1JZ1VL"
  };
    


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize database
const db = firebase.database();

// Get user's data
let username = '';
let email = '';
let phone = '';

// Flag to check if the message was sent by the user
let isMessageSent = false;

// Listen for the "Submit" button to set the user's name
document.getElementById('set-name-btn').addEventListener('click', function() {
  const nameInput = document.getElementById('username').value;
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;

  // Check if all fields are filled
  if (nameInput && emailInput && phoneInput) {
      username = nameInput;
      email = emailInput;
      phone = phoneInput;
      
      document.getElementById('greeting').innerHTML = `Hi, ${username} <i class="fas fa-check-circle"></i>!`;
      document.getElementById('username-container').style.display = 'none';
      
      // Play a notification sound
      const notificationSound = new Audio('NBA-Sound-MP3.mp3');  // Replace with your sound file
      notificationSound.play();
  } else {
      alert("Please enter your name, email, and phone number!");
  }
});

// Submit form
document.getElementById("message-form").addEventListener("submit", sendMessage);

// Send message to db
function sendMessage(e) {
  e.preventDefault();

  // Check if the username is empty
  if (!username) {
      alert("Please enter your information before sending a message!");
      return; // Prevent message from being sent
  }

  // Get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // Check if the message is empty
  if (!message.trim()) {
    alert("Please enter a message before sending!");
    return; // Prevent empty message from being sent
  }

  // Clear the input box
  messageInput.value = "";

  // Auto scroll to bottom
  document
      .getElementById("messages")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // Mark the message as sent
  isMessageSent = true;

  // Create db collection and send in the data
  db.ref("messages/" + timestamp).set({
      phone,
      email,
      username,
      message,
  });

  // Play sent message sound
  const sentSound = document.getElementById("sent-sound");

  // Stop any playing sound first, then play the sent sound
  if (!sentSound.paused) {
    sentSound.pause(); // Pause if already playing
    sentSound.currentTime = 0; // Reset the playback position
  }
  sentSound.play(); // Play the sound when a message is sent

  // Reset the flag after sending
  isMessageSent = false;
}

// Display the messages
const fetchChat = db.ref("messages/");

// Check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${username === messages.username ? "sent" : "receive"}>
      <span>${messages.username} <i class="fas fa-check-circle"></i>: </span>${messages.message}</li>`;

  // Append the message on the page
  document.getElementById("messages").innerHTML += message;

  // Play received message sound only if the message is not sent by the current user
  if (username !== messages.username && !isMessageSent) {
    const receivedSound = document.getElementById("received-sound");

    // Stop any playing sound first, then play the received sound
    if (!receivedSound.paused) {
      receivedSound.pause(); // Pause if already playing
      receivedSound.currentTime = 0; // Reset the playback position
    }
    receivedSound.play(); // Play the sound when a new message is received
  }
});
