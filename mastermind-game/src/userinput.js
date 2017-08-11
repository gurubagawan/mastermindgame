import React, { Component } from 'react';

import './App.css';

class Userinput extends Component {
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
      })

    // var newBoard = 
    // smallBoard.map((specbtn, j)=> {
    //    return (smallBoard key={j})
    // })
    //ar template = 
    //guess.map ((dot,i) => {

    // } )

    //  var template =
    //     board.map((guess, i) => {
    //       "<div>"
    //         guess.map((dot, j)=>{
    //           return (<button key={i} className={`btn btn-circle ${this.props.board[i].colour ? this.props.board[i].colour : ''}`} onClick={() => { this.props.setcolour((i + 1), this.props.colour) }} > </button>)
    //         }
    //         "</div>"



    //     })

    // var newBoard = 
    // smallBoard.map((specbtn, j)=> {
    //    return (smallBoard key={j})
    // })
    // var template = 
    // guess.map ((dot,i) => {

    // } )
    //     for(let i=0; i<8; i++) {
    //       newBoard.push(smallBoard)
    //     }
    //     //       var smallbrd = 
    //     //       specarr.map ((obj, j) => {
    //     //       return(
    //     //       <button key={j} className= {`btn btn-circle ${this.props.board[i][j].colour ? this.props.board[i][j].colour : ''}`} onClick={() => { this.props.setcolour((i+1) , this.props.colour) }} > </button>
    //     //  )
    //     //  }) 
    //     //}
    //     console.log(smallBoard)
    //console.log(newBoard)
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