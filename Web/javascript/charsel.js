
window.onload = function assign(){
    var playerName = sessionStorage.getItem("playername")
    console.log(playerName);
    document.getElementById("myPlayer").innerHTML = playerName
}

function characterSelecter(char){
    console.log(char.innerHTML)
    window.location.assign("gamepage.html");
}