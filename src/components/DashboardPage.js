import requireLogin from "./requireLogin";
import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as actions from "../actions";

class DashboardPage extends Component {
  componentDidMount() {
    this.props.getGames();
  }
  render() {
    const { games } = this.props;
    return (
      <div>
        <h2>Dashboard</h2>
        <p>{games && games.addition && games.addition.level}</p>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

const mapStateToProps = state => ({
  games: state.games
});

export default compose(
  requireLogin(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(DashboardPage);
