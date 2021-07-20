import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    num: 0,
  };

  plus = () => {
    this.setState((state) => ({ num: state.num + 1 }));
  };

  minus = () => {
    this.setState((state) => ({ num: state.num - 1 }));
  };

  render() {
    return (
      <div className="counter">
        <div className="counter-box">
          <h1 className="title">Let's count!</h1>
          <div className="num">{this.state.num}</div>
          <div className="buttons">
            <button onClick={this.plus}>+</button>
            <button onClick={this.minus}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
