import React, { Component } from 'react';

import './App.css';

class Userinput extends Component {
  render() {
    let board = this.props.board
    //let changingclass = `btn btn-circle ${this.props.board[i].colour ? this.props.board[i].colour : ''}`;
    //use Push loop to create multiple rows for use input somehow. 
    //for (let z=0; z<8; z++) {
var newBoard = []
    var smallBoard =
      board.map((specarr, i) => {
        return (<button key={i} className={`btn btn-circle ${this.props.board[i].colour ? this.props.board[i].colour : ''}`} onClick={() => { this.props.setcolour((i + 1), this.props.colour) }} > </button>)
      })

// var newBoard = 
// smallBoard.map((specbtn, j)=> {
//    return (smallBoard key={j})
// })
    for(let i=0; i<8; i++) {
      newBoard.push(smallBoard)
    }
    //       var smallbrd = 
    //       specarr.map ((obj, j) => {
    //       return(
    //       <button key={j} className= {`btn btn-circle ${this.props.board[i][j].colour ? this.props.board[i][j].colour : ''}`} onClick={() => { this.props.setcolour((i+1) , this.props.colour) }} > </button>
    //  )
    //  }) 
    //}
    console.log(smallBoard)
    return (

      //needs to update (remap) every input
      //       <div className={this.props.board[1].colour ? this.props.board[1].colour : ''}>
      // <button className= {this.props.board[1].colour ? this.props.board[1].colour : ''}
      // onClick={() => { this.props.setcolour(1 , this.props.colour) }} />
        <div>
          {newBoard}
      </div>
    );
  }
}

export default Userinput;