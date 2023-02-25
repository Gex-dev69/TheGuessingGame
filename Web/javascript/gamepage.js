

window.onload = function () {
    //set the chosenRandom
    document.getElementById("playerName").innerHTML = sessionStorage.getItem("playername");

}

var chosenword;

function getRandomWord() {

    var g = ["Random", "abroad", "absent", "around","assets"]
    let f = Math.random() * 4;
    console.log(g[Math.round(f)])
    chosenword = g[Math.round(f)].split('')
}
getRandomWord()
console.log(chosenword)



function game(ltr) {
    let counter = 0;
    let foundNone = true;
    let win = false;
    console.log(chosenword)
    // replace  with chosenword
    chosenword.forEach(element => {
        counter++;
        if (element === ltr) {
            foundNone = false
            console.log(counter)
            let x = counter.toString();
            document.getElementById("input" + x).innerHTML = ltr.toUpperCase();
        }
    });
    if (foundNone === true) {
        Swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            title: "MEH",
            icon: "warning",
        });
        setTimeout(function () {
            Swal.close();
        }, 500);
    } else {
        Swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            title: "DAMN",
            icon: "info",
        });
        setTimeout(function () {
            Swal.close();
        }, 500);
    }
    let cc = 0
    for(i = 0;i < 6;i++){
        let x = i.toString();
        if(document.getElementById("input" + x).innerHTML !== ""){
            cc++
        }
         
    }
    if (cc === 6) {
        alert("u won yay")
    }
}






function betene(btn) {
    console.log(btn.innerHTML)
    btn.disabled = true;
    btn.style.backgroundColor = '#474747'
    game(btn.innerHTML.toString().toLowerCase())
}