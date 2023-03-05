
window.onload = function assign(){
    var playerName = sessionStorage.getItem("playername")
    console.log(playerName);
    document.getElementById("myPlayer").innerHTML = playerName
    var sound_muted = sessionStorage.getItem("music");
    console.log(sound_muted)
    if (sound_muted === true) {
        document.getElementById("background_audio").muted = true;
    } else {
        document.getElementById("background_audio").muted = false;
    }
    //document.getElementById("background_audio").muted = sound_muted;
}

function characterSelecter(char){
    console.log(char.innerHTML)
    window.location.assign("gamepage.html");
}

function warner(){
    Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'To make game simple, only second character works',
      })
}
