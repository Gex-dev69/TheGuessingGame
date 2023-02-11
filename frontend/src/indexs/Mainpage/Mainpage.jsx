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

function get_selectedWord(){
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
    if(document.getElementById("selected_word").innerHTML != filterName){
      document.getElementById("selected_word").innerHTML = filterName;
    }
  };
}


function set_attempts() {
  get_selectedWord()
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
    if(document.getElementById("attempts_left").innerHTML != filterName){
      document.getElementById("attempts_left").innerHTML = filterName;
    }
  };
}
class Mainpage extends Component {
  render() {
    return (
      <div className="Main">
        <text  id="attempts_left"></text>
        <text id="selected_word"></text>
        <input id="myG" type="text" className="inputSyle"></input>
        <button onClick={() => sendInput()} className="supBiggga">
          CLICK ME WHORE
        </button>
      </div>
    );
  }
}

export default Mainpage;
