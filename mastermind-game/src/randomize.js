import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Randomize extends Component {
  render() {

    return (
      <div className="App">
       <button className ='btn btn-circle' disabled={true}/> 
       <button className ='btn btn-circle' disabled={true}/> 
       <button className ='btn btn-circle' disabled={true}/> 
       <button className ='btn btn-circle' disabled={true}/> 
      </div>
    );
  }
}

export default Randomize;