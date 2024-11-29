// Get search bar element
const searchInput = document.getElementById("searchInput");
// Get all name elements
const namesFromDOM = document.getElementsByClassName("name");

// Get the notification sound element
const notificationSound = document.getElementById("notification-sound");

// Listen for user typing events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // Convert user search input to lowercase for case-insensitive search
    const searchQuery = value.toLowerCase();
    
    // Loop through all name elements and apply search filtering
    let matchFound = false; // Track if any matches were found
    for (const nameElement of namesFromDOM) {
        let name = nameElement.textContent.toLowerCase();
        
        // If name matches the search query, display it; otherwise, hide it
        if (name.includes(searchQuery)) {
            nameElement.style.display = "block";
            matchFound = true; // A match was found
        } else {
            nameElement.style.display = "none";
        }
    }
    // No notification sound for typing input
});


/// Notification Sound Logic for Voice Search ///
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Set up the voice search button
    const voiceSearchBtn = document.getElementById("voiceSearchBtn");

    voiceSearchBtn.addEventListener("click", () => {
        recognition.start(); // Start voice recognition
    });

    // When the user speaks, update the search input with the result
    recognition.addEventListener("result", (event) => {
        let transcript = event.results[0][0].transcript;

        // Remove the period at the end of the text if it exists
        if (transcript.endsWith(".")) {
            transcript = transcript.slice(0, -1); // Remove the last character (the period)
        }

        searchInput.value = transcript; // Set the transcript to the search input field

        // Trigger the keyup event to filter names based on the spoken input
        const keyupEvent = new KeyboardEvent("keyup", {
            bubbles: true,
            cancelable: true,
            keyCode: 13, // Enter key, which is similar to submitting
        });
        searchInput.dispatchEvent(keyupEvent);

        // Play notification sound after voice search
        notificationSound.play();
    });

    // Handle errors
    recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error", event.error);
    });
} else {
    console.warn("Speech Recognition Not Supported.");
}




