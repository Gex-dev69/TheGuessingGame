var playerName = document.getElementById("playerName") 


function onPlay(){
    console.log(playerName.value)
    sessionStorage.setItem("playername",playerName.value)
    window.location.assign("charseL.html");
}


