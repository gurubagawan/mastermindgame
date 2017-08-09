import React, { Component } from 'react';
import './App.css';

class Gameboard extends Component {
    render() {
        const jsx = []
        for (let i = 0; i < 8; i++) {
            jsx.push(
                <div className="oneboard">
                    <button className='btn btn-circle' disabled={!(this.props.currentrow===i)}  />
                    <button className='btn btn-circle' disabled={!(this.props.currentrow===i)} />
                    <button className='btn btn-circle' disabled={!(this.props.currentrow===i)} />
                    <button className='btn btn-circle' disabled={!(this.props.currentrow===i)} />
                </div>
            )
        }

        return (
            <div className="multiboard">
                {jsx}
            </div>
        );
    }
}

export default Gameboard;