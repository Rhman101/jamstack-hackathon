import requireLogin from "./requireLogin";
import React, { Component } from "react";

import MathDisplay from './MathDisplay'
import ProgressBox from "./ProgressBox";
import NavBar from "./NavBar";

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
  render() {
    return (
      <div>
        <NavBar />
        <h2>Game</h2>
        <ProgressBox />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default requireLogin(authCondition)(Game);
