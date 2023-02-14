import React, { Component } from "react";
import "./Mainpage.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal); // https://github.com/sweetalert2/sweetalert2-react-content

function sendInput(button) {
  console.log(button);
  let el = document.getElementById(button);
  el.disabled=true
  el.style.backgroundColor = '#474747'
  const Http = new XMLHttpRequest();
  const url = `http://127.0.0.1:8000/tryMe/${el.innerHTML.toLowerCase()}`;
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
        get_selectedWord();
        setTimeout(function () {
          if (filterName == "LOST") {
            MySwal.fire({
              title: <strong>BOOOO</strong>,
              html: <i>You LOST</i>,
              icon: "error",
            });
          } else if (filterName == "WON") {
            MySwal.fire({
              title: <strong>Good job!</strong>,
              html: <i>You WON</i>,
              icon: "success",
            });
          }
        }, 900);
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
    if (Http.readyState === XMLHttpRequest.DONE) {
      var filterName = Http.responseText.substring(
        1,
        Http.responseText.length - 1
      );
      console.log(filterName);
      for (let i = 0; i < 6; i++) {
        let papa = document.getElementById("outPutCont").children.item(i);
        papa.innerHTML = filterName[i].toUpperCase();
      }
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
    if (Http.readyState === XMLHttpRequest.DONE) {
      var filterName = Http.responseText.substring(
        1,
        Http.responseText.length - 1
      );
      console.log(filterName);
      console.log(document.getElementById("attempts_left").innerHTML);
      if (document.getElementById("attempts_left").innerHTML != filterName) {
        document.getElementById("attempts_left").innerHTML = filterName;
        MySwal.fire({
          showConfirmButton: false,
          allowOutsideClick: false,
          title: "MEH",
          icon: "warning",
        });
        setTimeout(function () {
          MySwal.close();
        }, 500);
      }else{
        MySwal.fire({
          showConfirmButton: false,
          allowOutsideClick: false,
          title: "DAMN",
          icon: "info",
        });
        setTimeout(function () {
          MySwal.close();
        }, 500);
      }
    }
  };
}

function get_name() {
  const Http = new XMLHttpRequest();
  const url = "http://127.0.0.1:8000/getplayerName";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    var filterName = Http.responseText.substring(
      1,
      Http.responseText.length - 1
    );
    document.getElementById("playerName").innerHTML = filterName;
  };

  //console.log("here"+holder);
}

class Mainpage extends Component {
  render() {
    get_name();
    get_selectedWord();
    set_attempts();
    return (
      <div className="Main">
        <text className="player" id="playerName">
          PLAYER
        </text>
        <text className="attempts" id="attempts_left"></text>
        <div className="container">
          <div className="anim"></div>
        </div>
        <div className="cont">
          <div id="outPutCont" className="in">
            <div id="input1" className="inp">
              S
            </div>
            <div id="input2" className="inp">
              S
            </div>
            <div id="input3" className="inp">
              S
            </div>
            <div id="input4" className="inp">
              S
            </div>
            <div id="input5" className="inp">
              S
            </div>
            <div id="input6" className="inp">
              S
            </div>
          </div>
          <div className="kb">
            <button
              id="keyA"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              A
            </button>
            <button
              id="keyB"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              B
            </button>
            <button
              id="keyC"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              C
            </button>
            <button
              id="keyD"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              D
            </button>
            <button
              id="keyE"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              E
            </button>
            <button
              id="keyF"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              F
            </button>
            <button
              id="keyG"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              G
            </button>
            <button
              id="keyH"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              H
            </button>
            <button
              id="keyI"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              I
            </button>
            <button
              id="keyJ"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              J
            </button>
            <button
              id="keyK"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              K
            </button>
            <button
              id="keyL"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              L
            </button>
            <button
              id="keyM"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              M
            </button>
            <button
              id="keyN"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              N
            </button>
            <button
              id="keyO"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              O
            </button>
            <button
              id="keyP"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              P
            </button>
            <button
              id="keyQ"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              Q
            </button>
            <button
              id="keyR"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              R
            </button>
            <button
              id="keyS"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              S
            </button>
            <button
              id="keyT"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              T
            </button>
            <button
              id="keyU"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              U
            </button>
            <button
              id="keyV"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              V
            </button>
            <button
              id="keyW"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              W
            </button>
            <button
              id="keyX"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              X
            </button>
            <button
              id="keyY"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="key"
            >
              Y
            </button>
            <button onClick={() => sendInput("")} className="orphans"></button>
            <button onClick={() => sendInput("")} className="orphans"></button>
            <button
              id="keyZ"
              onClick={(me) => {
                sendInput(me.target.id);
                console.log(me.target.id);
              }}
              className="kez"
            >
              Z
            </button>
            <button onClick={() => sendInput("")} className="orphans"></button>
            <button onClick={() => sendInput("")} className="orphans"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpage;
