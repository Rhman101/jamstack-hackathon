import requireLogin from "./requireLogin";
import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as actions from "../actions";
import NavBar from "./NavBar";

class DashboardPage extends Component {
  async componentDidMount() {
    this.props.getGames();
    this.props.getUser();

    const game = {
      area: "addition",
      level: 2,
      charHealth: 90,
      monsterHealth: 100,
      questionNumber: 1
    };
    this.props.saveGame(game);
  }
  render() {
    const { games } = this.props;
    return (
      <div>
        <NavBar />
        <h2>Dashboard</h2>
        <h3>Saved Games</h3>

        <p />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

const mapStateToProps = ({ games }) => ({
  games: [
    ["addition", games.addition],
    ["subtraction", games.subtraction],
    ["multiplication", games.multiplication],
    ["division", games.division]
  ]
});

export default compose(
  requireLogin(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(DashboardPage);
