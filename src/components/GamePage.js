import React, { Component } from "react";
import MathDisplay from './MathDisplay'
import Bar from './Bar'

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

        <h4>Current Health of {this.state.name}</h4>
        <Bar />
        <h4>Current Health of Monster</h4>
        <Bar />
        <h4>Time Left</h4>
        <Bar />
      </div>
    );
  }
}

export default Game;
