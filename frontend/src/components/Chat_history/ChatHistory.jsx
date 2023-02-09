import React, { Component } from "react";
import "./ChatHistory.scss";



function get_name(){
  const Http = new XMLHttpRequest();
  const url='http://127.0.0.1:8000/getName/';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    document.getElementById("playerName").innerHTML = Http.responseText
  }
 
  //console.log("here"+holder);
}


class ChatHistory extends Component {
  render() {
    return (
      <div className='ChatHistory'>
        <h2 onClick={get_name()}>SELECT CHARACTER</h2>
        <div className="chatBody">
          <text className="text_style" id="playerName"></text>
        </div>
      </div>
    );
  };
}

export default ChatHistory;