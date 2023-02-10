import React, { Component } from "react";
import "./Mainpage.scss";

function sendInput(){
  fetch("http://127.0.0.1:8000/tryMe",{
    method:'POST',
    body:"theInput"
  }).then(Response => console.log(Response.status))
}


class Mainpage extends Component {
  render() {
    return (
      <div className="Main">
        <input id="myG" type="text" className="inputSyle"></input>
        <button onClick={() => sendInput()} className="supBiggga">CLICK ME BITCH</button>
      </div>
    );
  }
}

export default Mainpage;
