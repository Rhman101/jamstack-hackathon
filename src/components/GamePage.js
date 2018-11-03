import React, { Component } from "react";
import MathDisplay from './MathDisplay'
import Health from './Health'


class Game extends Component {
  state = {
    area: 'Addition',
    user: 'George',
    monster: 'Monster'
  };

  render() {
    return (
      <div className="content-container">
        <h2 className="title">{this.state.area}</h2>
        <MathDisplay />

        <h4>Current Health of {this.state.user}</h4>
        <Health />
        <h4>Current Health of {this.state.monster}</h4>
        <Health />
      </div>
    );
  }
}

export default Game;
