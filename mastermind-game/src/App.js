import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomize from './randomize';
import Parameters from './parameters';
import Userinput from './userinput';

// const initialstate = {
//       gameWon: false, 
//       singleboard: [
//         {colour: undefined, position: 1},
//         {colour: undefined, position: 2},
//         {colour: undefined, position: 3},
//         {colour: undefined, position: 4},
//       ],
//       //answer : this.randomarray(),
//     }


class App extends Component {
  constructor() {
    super();
    this.state = {
      gameWon: false,
      singleboard: [
        { colour: undefined, position: 1 },
        { colour: undefined, position: 2 },
        { colour: undefined, position: 3 },
        { colour: undefined, position: 4 },
      ],
      answer: this.randomarray(),
    }
    this.selectcolour = this.selectcolour.bind(this)
    this.setcolour = this.setcolour.bind(this)
    this.switchloop = this.switchloop.bind(this)
    this.compareAnswer = this.compareAnswer.bind(this)
    //this.cleareverthing = this.cleareverthing.bind(this)
  }
  // function for parameter block for user colour selection 
  selectcolour(newColour) {
    this.setState({
      colour: newColour
    })
  }
  // cleareverthing(){
  //   this.setState ({
  //     initialstate
  //   })
  // }
  // white=1, blue =2, green=3, purple=4, orange=5, red= 6, yellow=7, black=8 
  setcolour(inputpos, selectedcolour) {
    //console.log(this.state.singleboard)
    this.setState({
      singleboard: this.state.singleboard.map((specbtn, i) => {
        return (specbtn.position === inputpos ? { colour: selectedcolour, position: inputpos } : specbtn)
      })
    })
    //console.log(this.state.singleboard)
  }

  switchloop() {
    switch (Math.floor(Math.random() * 8)) {
      case 0:
        return 'white'
        break;
      case 1:
        return 'blue'
        break;
      case 2:
        return 'green'
        break;
      case 3:
        return 'purple'
        break;
      case 4:
        return 'orange'
        break;
      case 5:
        return 'red'
        break;
      case 6:
        return 'yellow'
        break;
      case 7:
        return 'black'
        break;
    }
  }
  randomarray() {
    var answer = []
    for (let i = 0; i < 4; i++) {
      let thiscol = this.switchloop();
      answer.push({ colour: thiscol, position: i + 1 })
    }
    console.log(answer)
    return answer
  }

  compareAnswer() {
    console.log('answer was compared')
    //going through specific arrays of arrays
    let ignore = []
    loop1:
    for (let i = 0; i < 4; i++) {
      //console.log('firstloop')
      // cycle through single array
      loop2:
      for (let j = 0; j < 4; j++) {
        //console.log('second loop')
        // cycling through the answer
        loop3:
        for (let k = 0; k < 4; k++) {
          //console.log('third loop')
          //push into array to ignore dupilicate colours 
          let ignoreTrue = ignore.findIndex((num) => {
            return num === k
          })
          //check to see for duplicate colours 
          //if (ignoreTrue < 0) {
          //check to see if both position and colour are right 
          loop4:
          if (this.state.answer[k].colour == this.state.singleboard[j].colour &&
            this.state.answer[k].position == this.state.singleboard[j].position) {
            if (ignoreTrue < 0) {
              //console.log('second if')
              //green = right position right colour
              //return "green"
              console.log('green')
              ignore.push(k)
              console.log(ignore)
              //break out of the loop when this true 
              break loop3;
            }
            break loop3
          }
          // }
          // //check again for ignore, but no disregarding position 
          // if (ignoreTrue < 0) {
          //check fjust for position 
          else if (this.state.answer[k].colour === this.state.singleboard[j].colour) {
            if (ignoreTrue < 0) {
              //return "yellow"
              console.log('yellow')
              ignore.push(k)
              break loop3;
            }
            break loop3;
          }
        }
      }
    }
  }

  render() {
    //console.log(this.state.singleboard)
    // const initialstate = {
    //   gameWon: false, 
    //   singleboard: [
    //     {colour: undefined, position: 1},
    //     {colour: undefined, position: 2},
    //     {colour: undefined, position: 3},
    //     {colour: undefined, position: 4},
    //   ],
    //   answer: this.randomarray()
    // }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mastermind Game</h2>
          <Randomize />
          <Userinput random={this.randomcolour} board={this.state.singleboard} setcolour={this.setcolour} colour={this.state.colour} />
          <Parameters colour={this.state.colour} selectcolour={this.selectcolour} clear={this.cleareverthing} compareAnswer={this.compareAnswer} />
        </div>
      </div>
    );
  }
}

export default App;
