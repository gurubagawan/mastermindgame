import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Userinput extends Component {
  render() {
for (let i=0; i<4; i++){
<button className="btn white btn-circle"
onClick={() => { this.props.setcolour(this.props.colour) }} />
}
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mastermind Game</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Userinput;