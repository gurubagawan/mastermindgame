import React, { Component } from 'react';

import './App.css';

class Board extends Component {
  render() {
    let template = this.props.board
    var newBoard =
      template.map((singarr, i) => {
        let x = singarr.map((button, j) => {
          return (<button key={j} disabled={!(this.props.currentrow === i)} className={`btn btn-circle ${this.props.board[i][j].colour ? this.props.board[i][j].colour : ''}`} onClick={() => { this.props.setcolour(i, (j + 1), this.props.colour) }} > </button>)
        })
        return (
          <div>
            <div className="fourButtons" key={i} > {x} </div>
            <div className='fourSmallButtons'>
              <div className='twoSmallButtons' >
                <button id={`1-${i}`} className='btn btn-xs' disabled={true} />
                <button id={`2-${i}`} className='btn btn-xs' disabled={true} />
              </div>
              <div className='twoSmallButtons' >
                <button id={`3-${i}`} className='btn btn-xs' disabled={true} />
                <button id={`4-${i}`} className='btn btn-xs' disabled={true} />
              </div>
            </div>
          </div>
        )
      });
    return (
      <div>
        {newBoard}
      </div>
    );
  }
}

export default Board;
