import requireLogin from "./requireLogin";
import React, { Component } from "react";
import ProgressBox from "./ProgressBox";
import NavBar from "./NavBar";

class Game extends Component {
  state = {};

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
