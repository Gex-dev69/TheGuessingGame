var chosenword;


var g = "hallof";

var hey = g.split("");


function tt(ltr){
    let counter = 0;
    hey.forEach(element => {
        counter ++;
        if(element === ltr){
            console.log(counter)
            let x = counter.toString();
            document.getElementById("input"+x).innerHTML = ltr.toUpperCase();
        }
    });    
}




function getRandomWord() {
    var g = ["Halo","No","pablo","carlos"]
    let f = Math.random() * 3;
    console.log(g[Math.round(f)])
}



function betene(btn){
    console.log(btn.innerHTML)
    btn.disabled=true;
    btn.style.backgroundColor = '#474747'
    tt(btn.innerHTML.toString().toLowerCase())
}