import React, { Component } from "react";

class MathDisplay extends Component {
  state = {
    firstNumber: 12,
    operation: '+',
    secondNumber: 12,
    answer: undefined
  };
  onNumberChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    this.setState(() => ({
      answer: value
    }))
  }
  render() {
    return (
      <div className="content-container">
        <div>
          <div className="box">
            {this.state.firstNumber}
            {this.state.operation}
            {this.state.secondNumber}
          </div>
          <form className="content-container">
            <input type="number" value={this.state.answer} onChange={this.state.onNumberChange} />
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MathDisplay;
