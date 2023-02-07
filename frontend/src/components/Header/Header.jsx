import React from "react";
import "./Header.scss";
import temp_img from '../../assets/__Idle.gif';
import temp_img_2 from '../../assets/playBtn.png';
//import temp_img_2 from '../../assets/flip_skel.gif';

//var ReactDOM = require('react-dom');
var GifPlayer = require('react-gif-player');



const Header = () => (
  <div className="header">
    <h2>GUESS TO LIVE</h2>
    <button className="sd"><img src={temp_img_2} alt="look" className="sound_ico"></img></button>
    <input type="text" id="playerName" className="input_prt" placeholder="Player" maxLength={10}></input>
    <button className="btn"><text className="TextStyle">PLAY</text></button>
    <div className="players"><GifPlayer   gif={temp_img} still={temp_img} />
    <GifPlayer   gif={temp_img} still={temp_img} /></div>
  </div>
);

export default Header;