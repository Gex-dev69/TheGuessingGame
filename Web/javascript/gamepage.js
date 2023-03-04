

window.onload = function () {
    //set the chosenRandom
    document.getElementById("playerName").innerHTML = sessionStorage.getItem("playername");

}


function getRandomWord() {

    var g = ["Random", "abroad", "absent", "around", "assets"]
    let f = Math.random() * 4;
    console.log(g[Math.round(f)])
    chosenword = g[Math.round(f)].split('')
}
getRandomWord()

//console.log(chosenword)

var attempts = document.getElementById("livesCont");

var liveLeft = 6;

var cc = 0;
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
            title: "DAMN",
            icon: "info",
        });
        setTimeout(function () {
            Swal.close();
            cc++;
            console.log("aye its me mario" + cc)
            if (cc === 6) {
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