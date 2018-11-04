import requireLogin from "./requireLogin";
import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as actions from "../actions";

class DashboardPage extends Component {
  componentDidMount() {
    this.props.getGames();
    this.props.getUser();
  }
  render() {
    const { games } = this.props;
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>Saved Games</h3>

        <p>{games && games[0][1].level}</p>
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
