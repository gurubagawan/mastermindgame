import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomize from './randomize'
import Parameters from './parameters'
import Userinput from './userinput'

class App extends Component {
  constructor (){
    super (); 
    this.state ={
      gameWon: false, 
      singleboard: [
        {colour: undefined, position: 1},
        {colour: undefined, position: 2},
        {colour: undefined, position: 3},
        {colour: undefined, position: 4},
      ]
    }
    this.selectcolour= this.selectcolour.bind(this)
    this.setcolour= this.setcolour.bind(this)
  }
  // function for parameter block for user colour selection 
  selectcolour(newColour) {
    this.setState ({
        colour: newColour
    })
  }
  // white=1, blue =2, green=3, purple=4, orange=5, red= 6, yellow=7, black=8 
  setcolour(inputpos, selectedcolour) {
    this.setState ({
      singleboard: this.state.singleboard.map((specbtn, i) =>{
        return (specbtn.position === inputpos ? {colour: selectedcolour, position: inputpos} : specbtn )
      } )
    })
  }
  //    else if (this.state.colour == 'green'){
  //     // className= 'green'
  //     //compare class names instead of numbers?
  //   }
  //   else if (this.state.colour == 'blue'){
  //     // className= 'blue'
  //     //compare class names instead of numbers?
  //   }
  //   else if (this.state.colour == 'purple'){
  //     // className= 'purple'
  //     //compare class names instead of numbers?
  //   }
  //   else if (this.state.colour == 'orange'){
  //     // {className= 'orange'}
  //     //compare class names instead of numbers?
  //   }
  //   else if (this.state.colour == 'black'){
  //     // className= 'black'
  //     //compare class names instead of numbers?
  //   }
  // }

  
  // // checkgamewin(){
  // // if () {
  // this.setstate({
  //   gameWon: true
  // })
  // }
  // }

  render() {
    //var col ='blue'
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mastermind Game</h2>
          <Userinput board={this.state.singleboard} setcolour={this.setcolour} colour= {this.state.colour}/> 
          <Parameters colour={this.state.colour} selectcolour= {this.selectcolour}/> 
          </div> 
      </div>
    );
  }
}

export default App;
