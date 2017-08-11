import React, { Component } from 'react';
import './App.css';

class Randomize extends Component {
  render() {

    return (
      <div className="App">
       <button className ='btn btn-circle unknown' disabled={true}>?</button>  
       <button className ='btn btn-circle unknown' disabled={true}>?</button> 
       <button className ='btn btn-circle unknown' disabled={true}>?</button> 
       <button className ='btn btn-circle unknown' disabled={true}>?</button> 
      </div>
    );
  }
}

export default Randomize;