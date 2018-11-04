import React, { Component } from "react";
import generateRandomNumber from '../utils/generateRandomNumber';
import createQuestion from '../utils/createQuestion';

class MathDisplay extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef()
    this.state = {
      x: null,
      y: null,
      answer: '',
      correctAnswer: null,
      operator: '',
      value: '',
      playerHealth: this.props.playerHealth,
      monsterHealth: this.props.monsterHealth
    };

  }
  generateNewQuestion() {
    const x = generateRandomNumber();
    const y = generateRandomNumber();
    const calc = createQuestion(x, y, 'addition');
    const operator = calc[0];
    const correctAnswer = calc[1];

    this.setState(() => ({
      x: this.props.area === 'division' ? x * y : x,
      y,
      correctAnswer,
      operator,

    }));
  }
  componentDidMount() {
    this.generateNewQuestion()
  }

  startTimer() {

  }
  checkAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState((prevState) => {
        return {
          playerHealth: prevState.playerHealth++,
          monsterHealth: prevState.monsterHealth--
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          playerHealth: prevState.playerHealth--,
          monsterHealth: prevState.monsterHealth++
        }
      })
    }
    this.setState({ answer: '' })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ answer: parseInt(this.textInput.current.value) })
    this.checkAnswer(this.state.answer, this.state.correctAnswer)
    this.generateNewQuestion()
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
          <form className="content-container" onSubmit=
            {this.onSubmit}  >
            <input type="text" ref={this.textInput} />
            <button>Submit</button>
            <h3>{this.state.answer}</h3>
          </form>
        </div>
      </div>
    );
  }
}

export default MathDisplay;
