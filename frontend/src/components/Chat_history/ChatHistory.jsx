import React, { Component } from "react";
import "./ChatHistory.scss";


import temp_img from "../../assets/fontys.gif"
import temp_img2 from "../../assets/idle.gif"
import temp_img3 from "../../assets/idle2.gif"
import temp_img4 from "../../assets/__Idle.gif"
var GifPlayer = require("react-gif-player");


//import backbtnimg from '../../assets/leftArrowInactive.png';//https://icons8.com/icons/set/back

function get_name() {
  const Http = new XMLHttpRequest();
  const url = "http://127.0.0.1:8000/getName";
  Http.open("GET", url)
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

class ChatHistory extends Component {
  render() {
    return (
      <div className="ChatHistory">
        <h2 onClick={get_name()}>SELECT CHARACTER</h2>
        <div className="chatBody">
          <text className="text_style" id="playerName"></text>
          <div className="con">
            <button className="selbtn">
              <div >
              <GifPlayer  className="tempo1" draggable="false" gif={temp_img} still={temp_img} />
              </div>
            </button>
            <button className="selbtn">
              <div>
              <GifPlayer className="tempo2"  draggable="false" gif={temp_img2} still={temp_img2} />
              </div>
            </button>
            <button className="selbtn">
              <div >
                <GifPlayer className="tempo3" draggable="false" gif={temp_img3} still={temp_img3} />
              </div>
            </button>
            <button className="selbtn">
              <div >
              <GifPlayer className="tempo4" draggable="false" gif={temp_img4} still={temp_img4} />
              </div>
            </button>
          </div>
  
        </div>
      </div>
    );
  }
}

export default ChatHistory;
