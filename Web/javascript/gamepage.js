

window.onload = function () {
    //set the chosenRandom
    document.getElementById("playerName").innerHTML = sessionStorage.getItem("playername");
    var sound_muted = sessionStorage.getItem("music");
    console.log(sound_muted)
    if (sound_muted === true) {
        document.getElementById("background_audio").muted = true;
    } else {
        document.getElementById("background_audio").muted = false;
    }
    //document.getElementById("background_audio").muted = true;
}


function getRandomWord() {

    var g = ["random", "tamper", "taping", "chadri", "screwy", "scythe", "throbs", "thulia"]
    let f = Math.random() * 4;
    console.log(g[Math.round(f)])
    chosenword = g[Math.round(f)].split('')
}
getRandomWord()

//console.log(chosenword)

var attempts = document.getElementById("livesCont");

var liveLeft = 6;

var cc = 0;

// Audio
var good = new Audio('./sound/good.wav');
var hit = new Audio('./sound/hit.wav');
var won = new Audio('./sound/won.wav');
var lose = new Audio('./sound/lose.wav');
var meh = new Audio('./sound/meh.wav');

function game(ltr) {
    console.log("called");
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
        Controller('attack')
        meh.play()
        let lastindex = attempts.children.length - 1;
        try {
            attempts.children.item(lastindex).style.width = "3cm";
        } catch (error) {

        }
        setTimeout(function () {
            try {
                attempts.children.item(lastindex).remove();
            } catch (error) {
                console.log("Skip if none found");
            }

            Swal.close();
            liveLeft = liveLeft - 1;
            console.log("Lives left is: " + liveLeft)
            if (liveLeft === 0) {
                console.log("You lost");
                document.getElementById("background_audio").muted = true;
                Controller('dead')
                lose.play()
                document.getElementById("you").src = "./img/Char_1/hit.gif";
                Swal.fire({
                    title: 'YOU LOST, WANNA PLAY AGAIN?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'YES',
                    denyButtonText: `NO`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        location.reload();
                    } else if (result.isDenied) {
                        window.location.assign("index.html")
                    }
                });

            }
        }, 500);
    } else {
        Swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            title: "WOW",
            icon: "info",
        });
        Controller('hit')
        setTimeout(function () {
            Swal.close();
            cc++;
            console.log("aye its me mario" + cc)
            if (cc === 6) {
                document.getElementById("background_audio").muted = true;
                
                won.play();
                Swal.fire({
                    title: 'YOU WON, WANNA PLAY AGAIN?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'YES',
                    denyButtonText: `NO`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        location.reload();
                    } else if (result.isDenied) {
                        window.location.assign("index.html")
                    }
                });
            }
           
        }, 500);
    }
}




function betene(btn) {
    console.log(btn.innerHTML)
    btn.disabled = true;
    btn.style.backgroundColor = '#474747'
    game(btn.innerHTML.toString().toLowerCase())
}

function Controller(action) {
    switch (action) {
        case "hit":
            console.log(cc)
            if (cc === 5) {
                document.getElementById("enemy").src="./img/skeleton/Skeleton Dead.gif";
                break;
            }
            document.getElementById("you").src = "./img/Char_1/attack.gif";
            good.play();
            setTimeout(function() {
                document.getElementById("enemy").src="./img/skeleton/Skeleton Hit.gif";
                document.getElementById("you").src = "./img/Char_1/idle.gif";
                setTimeout(function() {
                    document.getElementById("enemy").src="./img/skeleton/Skeleton Idle.gif";
                },800)
              }, 800);
            break;
        case "attack":
            document.getElementById("enemy").style.width ="5.4cm"
            document.getElementById("enemy").src="./img/skeleton/Skeleton Attack.gif";
            setTimeout(function() {
                document.getElementById("you").src = "./img/Char_1/hit.gif";
                hit.play();
                setTimeout(function() {
                    document.getElementById("you").src = "./img/Char_1/idle.gif";
                },400)
                document.getElementById("enemy").style.width ="3cm"
                document.getElementById("enemy").src="./img/skeleton/Skeleton Idle.gif";
                //
              }, 1000);
            break;
        case "dead":
            document.getElementById("enemy").src="./img/skeleton/Skeleton Dead.gif";
            break;
    }
    
   
}

