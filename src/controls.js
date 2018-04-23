import React, { Component } from 'react';
import './App.css';

//8 Coloured circles
class Controls extends Component {
    render() {
        let box = `currentcolour ${this.props.colour}`;
        return (
            <div className='parameters'>
                <div className="buttons">
                    <button className="btn white btn-circle"
                        onClick={() => { this.props.selectcolour('white') }} />
                    <button className="btn blue btn-circle"
                        onClick={() => { this.props.selectcolour('blue') }} />
                    <button className="btn green btn-circle"
                        onClick={() => { this.props.selectcolour('green') }} />
                    <button className="btn purple btn-circle"
                        onClick={() => { this.props.selectcolour('purple') }} />
                    <br />
                    <button className="btn orange btn-circle"
                        onClick={() => { this.props.selectcolour('orange') }} />
                    <button className="btn red btn-circle"
                        onClick={() => { this.props.selectcolour('red') }} />
                    <button className="btn yellow btn-circle"
                        onClick={() => { this.props.selectcolour('yellow') }} />
                    <button className="btn black btn-circle"
                        onClick={() => { this.props.selectcolour('black') }} />
                </div>
                <div className={box}>  <div className='colourbox' > Selected <br /> Colour </div> </div>
                <div className='gamebtns'>
                    <button className="btn black check"
                        onClick={() => {this.props.compareAnswer()}} >Check</button>
                </div>
            </div>
        );
    }
}

export default Controls;
