import React, { Component } from "react";

import MathDisplay from './MathDisplay'
import ProgressBox from "./ProgressBox";

class Game extends Component {
  state = {
    name: '',
    area: '',
    level: '',
  };

  componentDidMount() {
    this.setState(() => ({
      area: 'addition',
      name: 'George',
      level: 'easy'
    }));
  }

  render() {
    return (
      <div className="content-container">
        <h2 className="title">{this.state.area}</h2>
        <MathDisplay area={this.state.area} />
        <ProgressBox />
      </div>
    );
  }
}

export default Game;
