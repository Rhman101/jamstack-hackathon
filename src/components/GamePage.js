import requireLogin from "./requireLogin";
import React, { Component } from "react";

class Game extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Game</h2>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default requireLogin(authCondition)(Game);
