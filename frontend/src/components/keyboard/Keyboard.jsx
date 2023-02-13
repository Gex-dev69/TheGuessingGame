import React, { Component } from "react";
import PinInput from "react-pin-input";
import moment from "moment";
import swal from "sweetalert";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.scss";

class Pin extends Component {
  state = {
    input: "",
    currentTime: moment().format("LT"),
    layoutName: "default",
  };

  onChange = (input) => {
    this.setState({
      input: input,
    });
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{clear}") {
      this.handleClear();
      return;
    }

    if (button === "{bksp}") {
      if (this.pin.elements[3].state.value) {
        this.pin.elements[3].state.value = "";
        return;
      }
      if (this.pin.elements[2].state.value) {
        this.pin.elements[2].state.value = "";
        return;
      }
      if (this.pin.elements[1].state.value) {
        this.pin.elements[1].state.value = "";
        return;
      }
      if (this.pin.elements[0].state.value) {
        this.pin.elements[0].state.value = "";
        return;
      }
    }
    const Http = new XMLHttpRequest();
    let url = `http://127.0.0.1:8000/tryMe/${button}`;
    Http.open("GET", `http://127.0.0.1:8000/tryMe/${button}`);
    Http.send();
    Http.onreadystatechange = (e) => {
      if (Http.readyState === XMLHttpRequest.DONE) {
        const status = Http.status;
        console.log(status);
        url = `http://127.0.0.1:8000/getWord`;
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
                //console.log(i +" "+filterName[i])
              this.pin.elements[i].state.value = filterName[i];
              console.log(i + " "+this.pin.elements[i].state.value)
              
            }
            
          }
        };
      }
    };

    /*if (this.pin.elements[4].state.value) {
      this.pin.elements[5].state.value = button;
      //setTimeout(this.onSubmitHandler, 10);
      return;
    }
    if (this.pin.elements[3].state.value) {
      this.pin.elements[4].state.value = button;
      //setTimeout(this.onSubmitHandler, 10);
      return;
    }
    if (this.pin.elements[2].state.value) {
      this.pin.elements[3].state.value = button;
      //setTimeout(this.onSubmitHandler, 10);
      return;
    }
    if (this.pin.elements[1].state.value) {
      this.pin.elements[2].state.value = button;
      return;
    }
    if (this.pin.elements[0].state.value) {
      this.pin.elements[1].state.value = button;
      return;
    }
    this.pin.elements[0].state.value = button;*/
  };

  handleClear = () => {
    this.setState(
      {
        input: "",
      },
      () => {
        this.keyboard.clearInput();
      }
    );

    this.pin.clear();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    let input = event.target.value;
    this.setState(
      {
        input: input,
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  onSubmitHandler = (e) => {
    this.pin.values = e;
    if (this.state.input == "1234") {
      window.localStorage.setItem("pin", this.state.input);
      window.location.href = "https://qnm081.csb.app/home";
    } else {
      swal("Invalid PIN!", "Pin you enter didn't match. Try again", "error");
      window.location.reload();
      this.handleClear();
    }
  };

  inputStyle = {
    padding: "10px",
    fontSize: 20,
    border: 0,
    background: "#000",
    margin: "30px 0px 0px",
    color: "#fff",
    textAlign: "Center",
  };

  render() {
    return (
      <div className="Pin home-container">
        <PinInput
          length={6}
          focus
          ref={(p) => (this.pin = p)}
          type="string"
          inputMode="text"
          pattern="\d*"
          //value={this.state.input}
          //onChange={this.onChange.bind(this)}
          onComplete={this.onSubmitHandler}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          theme={
            "hg-theme-default hg-theme-numeric hg-layout-numeric numeric-theme"
          }
          layout={{
            default: [
              "a b c d e",
              "f g h i j",
              "k l m n o",
              "p q r s t",
              "u v w x y",
              "z",
              "{clear} 0 {bksp}",
            ],
          }}
          mergeDisplay
          display={{
            "{clear}": "Clear",
            "{bksp}": "&#8592",
          }}
          maxLength={6}
          onChange={(input) => this.onChange(input)}
          onKeyPress={(button) => this.onKeyPress(button)}
          //onComplete={this.onSubmitHandler}
        />
      </div>
    );
  }
}
export default Pin;
