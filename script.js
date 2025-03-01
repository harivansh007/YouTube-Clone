function playVideo(url) {
    document.getElementById("video-player").classList.remove("hidden");
    document.getElementById("main-video").src = url;
}

function closeVideo() {
    document.getElementById("video-player").classList.add("hidden");
    document.getElementById("main-video").src = "";
}

function searchVideos() {
    alert("Search functionality not implemented yet!");
}
