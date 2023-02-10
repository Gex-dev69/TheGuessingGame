import React, { Component } from "react";
import "./ChatHistory.scss";
import Grid from "@mui/material/Grid"; // Grid version 1
import Charholder from "../charHolder";

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
          <Grid className="gridbb" container spacing={1}>
            <Grid items xs={0} md={0}>
                <Charholder/>
            </Grid>
            <Grid items xs={3} md={0}>
                <Charholder/>
            </Grid>
            <Grid items xs={3} md={0}>
                <Charholder/>
            </Grid>
            <Grid items xs={3} md={0}>
                <Charholder/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ChatHistory;
