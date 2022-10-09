import React, { createRef } from 'react';
import "./App.css";

class FieldTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.state = {
      error: "",
      count: 0
    }
  }

  countSymbol = (event) => {
    event.preventDefault();
    let bufCount = this.input.current.value;
    bufCount = bufCount.trim();
    this.setState({ count: bufCount.length });
  }

  render() {
    return (
      <div className='fieldTextarea'>
        <label>{this.props.name}</label>
        <br />
        <textarea ref={this.input} rows="7" placeholder={this.props.name} onChange={(event) => this.countSymbol(event)}></textarea>
        {this.state.count <= 600 && <span className='symblos-left'>symbols: {this.state.count} / 600</span>}
        {this.state.count > 600 && <span className='symblos-limit'>character limit exceeded</span>}
        <span className='error-message'>{this.state.error}</span>
      </div>
    );
  }
}

export default FieldTextarea;
