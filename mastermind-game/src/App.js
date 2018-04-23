import React, { Component } from "react";
import "./App.css";
import Randomize from "./randomize";
import Controls from "./controls";
import Board from "./board";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.selectcolour = this.selectcolour.bind(this);
    this.setcolour = this.setcolour.bind(this);
    this.switchloop = this.switchloop.bind(this);
    this.compareAnswer = this.compareAnswer.bind(this);
    this.checkGameComplete = this.checkGameComplete.bind(this);
    this.gameInit = this.gameInit.bind(this);
  }

  componentWillMount() {
    this.gameInit();
  }

  componentDidUpdate() {
    if (this.state.currentrow === -1 && this.state.gameWon === false) {
      alert(
        "We took the time to code this game, but you were not smart enough to beat it.... :(...tell your mom she failed you"
      );
    }
  }

  gameInit() {
    var tempanswer = [];
    for (let i = 0; i < 4; i++) {
      let thiscol = this.switchloop();
      tempanswer.push({ colour: thiscol, position: i + 1 });
    }
    //console.log(answer)
    this.setState({
      gameWon: false,
      singleboard: [
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ],
        [
          { colour: undefined, position: 1 },
          { colour: undefined, position: 2 },
          { colour: undefined, position: 3 },
          { colour: undefined, position: 4 }
        ]
      ],
      answer: tempanswer,
      currentrow: 7
    });

    console.log(tempanswer);
    //return answer
  }

  // function for parameter block for user colour selection
  selectcolour(newColour) {
    this.setState({
      colour: newColour
    });
  }

  setcolour(row, column, selectedcolour) {
    this.setState({
      singleboard: this.state.singleboard.map((specrow, i) => {
        if (i === this.state.currentrow) {
          return specrow.map((specbtn, j) => {
            return specbtn.position === column
              ? { colour: selectedcolour, position: column }
              : specbtn;
          });
        } else return specrow;
      })
    });
  }

  //Generates a random number between 0 -> 7, and assigns a colour based on those numbers
  switchloop() {
    switch (Math.floor(Math.random() * 8)) {
      case 0:
        return "white";
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "purple";
      case 4:
        return "orange";
      case 5:
        return "red";
      case 6:
        return "yellow";
      case 7:
        return "black";
    }
  }

  compareAnswer() {
    //console.log('answer was compared')
    var correct = 0;
    var partial = 0;
    //going through specific arrays of arrays
    let ignore = [];
    var submission = this.state.singleboard[this.state.currentrow];

    for (let j = 0; j < 4; j++) {
      //create a const to store whether or not this position is in the ignore array
      let ignoreTrue = ignore.findIndex(num => {
        return num === j;
      });
      //check to see if there is a match between both position and colour
      if (this.state.answer[j].colour === submission[j].colour) {
        //has this position already been checked? if not (ignoreTrue will be 0 or greater) run this loop
        if (ignoreTrue < 0) {
          // console.log('green')
          ignore.push(j);
          //store the amount of correct guesses in a variable, and increase this variable
          correct++;
          // console.log(correct)
        }
      }
    }
    //now we need two different loops to because we are checking if the colour is in there at all
    for (let z = 0; z < 4; z++) {
      //console.log(z)
      for (let l = 0; l < 4; l++) {
        let ignoreTrue = ignore.findIndex(num => {
          return num === l;
        });
        if (this.state.answer[l].colour === submission[z].colour) {
          if (ignoreTrue < 0) {
            // console.log('yellow')
            ignore.push(l);
            partial++;
            break;
          }
        }
      }
    }
    this.printResults(correct, partial);
    this.checkGameComplete(correct);

    if (this.state.currentrow > -1) {
      this.setState({
        currentrow: --this.state.currentrow
      });
    }
  }

  printResults(correct, partial) {
    for (let i = 0; i < correct; i++) {
      var x = document.getElementById(`${i + 1}-${this.state.currentrow}`);
      // console.log(x)
      x.className = "btn btn-xs green";
    }
    for (let i = correct; i < partial + correct; i++) {
      var y = document.getElementById(`${i + 1}-${this.state.currentrow}`);
      // console.log(y)
      y.className = "btn btn-xs yellow";
    }
  }

  checkGameComplete(correct) {
    if (correct === 4) {
      this.setState({
        gameWon: true
      });
      alert("Heck ya you won!");
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Mastermind Game</h2>
          <Randomize />
          <Board
            currentrow={this.state.currentrow}
            random={this.randomcolour}
            board={this.state.singleboard}
            setcolour={this.setcolour}
            colour={this.state.colour}
          />
          <Controls
            reload={this.gameInit}
            colour={this.state.colour}
            selectcolour={this.selectcolour}
            compareAnswer={this.compareAnswer}
          />
          <br />
          <button className="btn black new gamebtns" onClick={this.gameInit}>
            {" "}
            Start New Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
