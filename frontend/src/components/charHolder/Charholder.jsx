import React from "react";
import "./Charholder.scss";
import temp_img from "../../assets/__Idle.gif";

var GifPlayer = require("react-gif-player");

const Charholder = () => {
  return (
    <button className="selbtn">
      <GifPlayer gif={temp_img} still={temp_img} />
    </button>
  );
};

export default Charholder;
