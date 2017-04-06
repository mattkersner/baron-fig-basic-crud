import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.objLines = {
    }

    this.state = {
      line1: "",
      line2: "",
      line3: ""
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.getLines();
  }

  getLines() {
    let objLines = localStorage.getItem("objLines");
    let line1 = localStorage.getItem("line1");
    let line2 = localStorage.getItem("line2");
    let line3 = localStorage.getItem("line3");
    this.setState({
      line1,
      line2,
      line3
    })
  }

  updateState(value1, value2, value3) {
    localStorage.setItem('line1', value1.toString());
    localStorage.setItem('line2', value2.toString());
    localStorage.setItem('line3', value3.toString());
    this.setState({
      line1: value1,
      line2: value2,
      line3: value3
    })
  }

  deleteItem(value) {
    localStorage.removeItem(value);
    this.getLines();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Baron Fig React Crud App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input
          updateState={this.updateState} />
        {this.state.line1}
        <button type="submit" onClick={() => this.deleteItem('line1')}>Delete</button>
        <br />
        {this.state.line2}
        <button type="submit" onClick={() => this.deleteItem('line2')}>Delete</button>
        <br />
        {this.state.line3}
        <button type="submit" onClick={() => this.deleteItem('line3')}>Delete</button>
      </div>
    );
  }
}

export default App;
