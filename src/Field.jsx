import React, { createRef } from 'react';
import "./App.css";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }


  render() {
    return (
      <div className='field'>
        <label>{this.props.name}</label>
        <br />
        <input ref={this.input} type={this.props.type} pattern={(this.props.type === "tel") ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""} placeholder={this.props.name}></input>
      </div>
    );
  }
}

export default Field;
