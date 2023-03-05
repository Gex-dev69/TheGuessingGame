var playerName = document.getElementById("playerName") 
var sound_muted = false;

window.onload = function () {
    document.getElementById("background_audio").play();
    document.getElementById("background_audio").muted = sound_muted;
}
function onPlay(){
    console.log(playerName.value)
    sessionStorage.setItem("playername",playerName.value)
    sessionStorage.setItem("music",document.getElementById("background_audio").muted)
    window.location.assign("charseL.html");
}

function manual() {
    window.location.assign("manual.html")
}

function sound() {
    if (sound_muted) {
        sound_muted = false;
        document.getElementById("background_audio").muted = sound_muted;
        document.getElementById("playsound").src="./img/playBtn.png"
    } else {
        sound_muted = true;
        document.getElementById("playsound").src="./img/nosound.png"
        document.getElementById("background_audio").muted = sound_muted;
    }
}
