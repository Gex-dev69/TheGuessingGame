import React, { Component } from "react";
import "./Mainpage.scss";


function sendInput() {
  let letterInput = document.getElementById("myG").value; // Get inputvalue
  const Http = new XMLHttpRequest();
  const url = `http://127.0.0.1:8000/tryMe/${letterInput}`;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.readyState === XMLHttpRequest.DONE) {
      const status = Http.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        var filterName = Http.responseText.substring(
          1,
          Http.responseText.length - 1
        );
        set_attempts();
        console.log(filterName);
        setTimeout(function () {
          if (filterName == "LOST") {
            alert("You Lost");
          } else if (filterName == "WON") {
            alert("You Won");
          }
        }, 500);
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };

  //console.log("here"+holder);
}

function get_selectedWord() {
  const Http = new XMLHttpRequest();
  const url = `http://127.0.0.1:8000/getWord`;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var filterName = Http.responseText.substring(
      1,
      Http.responseText.length - 1
    );
    console.log(filterName);
    if (document.getElementById("selected_word").innerHTML != filterName) {
      document.getElementById("selected_word").innerHTML = filterName;
    }
  };
}

function set_attempts() {
  get_selectedWord();
  const Http = new XMLHttpRequest();
  const url = `http://127.0.0.1:8000/attempts`;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var filterName = Http.responseText.substring(
      1,
      Http.responseText.length - 1
    );
    console.log(filterName);
    if (document.getElementById("attempts_left").innerHTML != filterName) {
      document.getElementById("attempts_left").innerHTML = filterName;
    }
  };
}
class Mainpage extends Component {
  render() {
    return (
      <div className="Main">
        <text className="player" id="playerName">
          PLAYER
        </text>
        
        <text id="attempts_left"></text>

        <div className="container">
          <div className="anim">
            place ur animation here
          </div>
        </div>
        <div className="cont">
          <div className="in">
              <div id="input1" className="inp">S</div>
              <div id="input2" className="inp">S</div>
              <div id="input3" className="inp">S</div>
              <div id="input4" className="inp">S</div>
              <div id="input5" className="inp">S</div>
              <div id="input6" className="inp">S</div>
          </div>
          <div className="kb">
            <button className="key">A</button>
            <button className="key">B</button>
            <button className="key">C</button>
            <button className="key">D</button>
            <button className="key">E</button>
            <button className="key">F</button>
            <button className="key">G</button>
            <button className="key">H</button>
            <button className="key">I</button>
            <button className="key">J</button>
            <button className="key">K</button>
            <button className="key">L</button>
            <button className="key">M</button>
            <button className="key">N</button>
            <button className="key">O</button>
            <button className="key">P</button>
            <button className="key">Q</button>
            <button className="key">R</button>
            <button className="key">S</button>
            <button className="key">T</button>
            <button className="key">U</button>
            <button className="key">V</button>
            <button className="key">W</button>
            <button className="key">X</button>
            <button className="key">Y</button>
            <button className="orphans"></button>
            <button className="orphans"></button>
            <button className="kez">Z</button>
            <button className="orphans"></button>
            <button className="orphans"></button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpage;
