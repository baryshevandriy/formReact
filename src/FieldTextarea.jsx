import React, { createRef } from 'react';
import "./App.css";

class FieldTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  render() {
    return (
      <div className='fieldTextarea'>
        <label>{this.props.name}</label>
        <br />
        <textarea ref={this.input} rows="7" placeholder={this.props.name}></textarea>
      </div>
    );
  }
}

export default FieldTextarea;
