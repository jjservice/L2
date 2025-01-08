const videoPlayerV = document.getElementById("videoPlayerV");
const playPauseBtnV = document.getElementById("playPauseBtnV");
const prevBtnV = document.getElementById("prevBtnV");
const nextBtnV = document.getElementById("nextBtnV");
const randomBtnV = document.getElementById("randomBtnV");
const searchInputV = document.getElementById('searchInputV');
const videoListV = document.getElementById('videoListV');

// Video array (with actual video file paths)
const videos = [
    {
        id: 0,
        title: "Tiempos de Plan B",
        creator: "Maldy",
        thumbnail: "./MaldyTiemplosDeplanBPic.jpg",
        video: "./Maldy - Tiempos de Plan B (Official Video).mp4"
    },
    {
        id: 1,
        title: "Una Diabla",
        creator: "Pressure9x19 X @justinquiles",
        thumbnail: "./UnaDiablaQuilesPressurePic.jpg",
        video: "./Pressure9x19 X  @justinquiles  - Una Diabla (Official Video).mp4"
    }
];

let currentVideoIndexV = 0;

// Function to update and play the video
function updateVideo() {
    const video = videos[currentVideoIndexV];
    videoPlayerV.src = video.video;
    videoPlayerV.load(); // Ensures that the video is loaded
    
    // Update UI with video info
    document.getElementById("videoThumbnail").innerText = video.img;
    document.getElementById("videoTitle").innerText = video.title;
    document.getElementById("creatorName").innerText = video.creator;

    // Change play/pause button icon
    playPauseBtnV.innerHTML = '<i class="fas fa-pause"></i>';

    // Mark active video in the list
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach((item, index) => {
        if (index === currentVideoIndexV) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Play/Pause button event listener
playPauseBtnV.addEventListener("click", () => {
    if (videoPlayerV.paused) {
        videoPlayerV.play();
        playPauseBtnV.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayerV.pause();
        playPauseBtnV.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Next button event listener
nextBtnV.addEventListener("click", () => {
    currentVideoIndexV = (currentVideoIndexV + 1) % videos.length;
    updateVideo();
    videoPlayerV.play(); 
    


});

// Previous button event listener
prevBtnV.addEventListener("click", () => {
    currentVideoIndexV = (currentVideoIndexV - 1 + videos.length) % videos.length;
    updateVideo();
    videoPlayerV.play();
});

// Random button event listener
randomBtnV.addEventListener("click", () => {
    currentVideoIndexV = Math.floor(Math.random() * videos.length);
    updateVideo();
    videoPlayerV.play();
});

// When the video ends, automatically play the next video
videoPlayerV.addEventListener("ended", () => {
    nextBtnV.click();

});

// Initialize the player with the first video
updateVideo();

// Function to render the video list
function renderVideoList(filteredVideos = videos) {
    videoListV.innerHTML = ''; // Clear previous list
    filteredVideos.forEach((video, index) => {
        const videoItem = document.createElement('li');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h5>${video.title}</h5>
            <p>${video.creator}</p>
        `;
        videoItem.addEventListener('click', () => {
            currentVideoIndexV = videos.indexOf(video);
            updateVideo();
        });
        videoListV.appendChild(videoItem);
    });
}

// Initial render of the video list
renderVideoList();

// Search input event listener for filtering videos
searchInputV.addEventListener('input', function() {
    const searchQuery = searchInputV.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery) ||
        video.creator.toLowerCase().includes(searchQuery)
    );
    renderVideoList(filteredVideos); // Re-render the video list with the filtered videos
});

