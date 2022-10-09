import React, { createRef } from 'react';
import "./App.css";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.state = {
      error: ""
    }
  }

  addDash = (event) => {
    event.preventDefault();
    if (this.props.type === "tel") {
      let regTest = /[0-9]/;
      let bufstr = this.input.current.value;
      if (!regTest.test(bufstr[bufstr.length - 1])) {
        this.input.current.value = bufstr.slice(0, bufstr.length - 1);
        return;
      }
      console.log(this.input.current.value);
      if (bufstr.length === 1) {
        this.input.current.value += "-";
      }
      else if (bufstr.length === 6) {
        this.input.current.value += "-";
      }
      else if (bufstr.length === 9) {
        this.input.current.value += "-";
      }
      else if (bufstr.length > 12) {
        this.input.current.value = bufstr.slice(0, bufstr.length - 1);
      }
      console.log(this.input.current.value, " -> now");
    }
  }

  render() {
    return (
      <div className='field'>
        <label>{this.props.name}</label>
        <br />
        {this.props.type === "url" && <span>https://</span>}<input ref={this.input} type={this.props.type} pattern={(this.props.type === "tel") ? "[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}" : ""} onChange={(event) => this.addDash(event)} placeholder={this.props.name}></input>
        <span className='error-message'>{this.state.error}</span>
      </div>
    );
  }
}

export default Field;
