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
      level: 'easy',
      playerHealth: 20,
      monsterHealth: 20
    }));
  }

  render() {
    return (
      <div className="content-container">
        <h2 className="title">{this.state.area}</h2>
        <MathDisplay
          area={this.state.area}
          playerHealth={this.state.playerHealth}
          monsterHealth={this.state.monsterHealth}
        />
        <ProgressBox />
      </div>
    );
  }
}

export default Game;
