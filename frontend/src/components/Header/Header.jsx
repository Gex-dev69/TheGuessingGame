import React from "react";
import "./Header.scss";
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Header = () => (
  <div className="header">
    <h2>GUESS TO LIVE</h2>
    <Button>
      Disabled Button
    </Button>
    <button className="btn"><text className="TextStyle">PLAY</text></button>
  </div>
);

export default Header;