import React, { Component } from "react";
//import {connect} from "react-redux";
import generateRandomNumber from '../utils/generateRandomNumber';
import createQuestion from '../utils/createQuestion';

class MathDisplay extends Component {
  state = {
    x: null,
    y: null,
    answer: '',
    correctAnswer: null,
    operator: ''
  };
  componentDidMount() {
    const x = generateRandomNumber();
    const y = generateRandomNumber();
    const calc = createQuestion(x, y, 'addition');
    const operator = calc[0];
    const correctAnswer = calc[1];

    this.setState(() => ({
      x: this.props.area === 'division' ? x * y : x,
      y,
      correctAnswer,
      operator
    }));
  }
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
            {this.state.x}
            {this.state.operator}
            {this.state.y}
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
