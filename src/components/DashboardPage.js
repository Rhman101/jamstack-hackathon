import requireLogin from "./requireLogin";
import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as actions from "../actions";
import NavBar from "./NavBar";

class DashboardPage extends Component {
  async componentDidMount() {
    this.props.getGame();
    this.props.getUser();

    const game = {
      area: "addition",
      level: 3,
      charHealth: 90,
      monsterHealth: 50,
      questionNumber: 2
    };
    this.props.saveGame(game);
  }
  render() {
    const { game } = this.props;
    return (
      <div>
        <NavBar />
        <h2>Dashboard</h2>
        <h3>Saved Game</h3>
        <p>{game.level}</p>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

const mapStateToProps = ({ game }) => ({
  game
});

export default compose(
  requireLogin(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(DashboardPage);
