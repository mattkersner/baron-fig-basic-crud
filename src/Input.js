import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {

  keyPress(e) {
    if (e.charCode === 13) {
      this.props.updateState(this.input1.value, this.input2.value, this.input3.value);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.input1 = input} />
        <input
          type="text"
          ref={(input) => this.input2 = input} />
        <input
          type="text"
          ref={(input) => this.input3 = input}
          onKeyPress={(e) => this.keyPress(e)} />
        <button type="submit" onClick={() => this.props.updateState(this.input1.value, this.input2.value, this.input3.value)}>
          Submit
        </button>
      </div>
    )
  }
}

export default Input;


