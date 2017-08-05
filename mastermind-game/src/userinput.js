import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Userinput extends Component {
  render() {
    let board = this.props.board
    const newBoard = board.map((specbtn, i) => {
      return(
      <button className= {this.props.board[i].colour ? this.props.board[i].colour : ''} onClick={() => { this.props.setcolour(1 , this.props.colour) }} > </button>
    )} )
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