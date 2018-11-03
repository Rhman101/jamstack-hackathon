import React, { Component } from "react";

class MathDisplay extends Component {
  state = {
    firstNumber: 12,
    operation: '+',
    secondNumber: 12,
    result: 24
  };

  render() {
    return (
      <div className="content-container">
        <div className="box">
          <div>
            {this.state.firstNumber}
            {this.state.operation}
            {this.state.secondNumber}
          </div>
          <div>
            =
            {this.state.result}
          </div>
        </div>
      </div >
    );
  }
}

export default MathDisplay;
