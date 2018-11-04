import requireLogin from "./requireLogin";
import React, { Component } from "react";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default requireLogin(authCondition)(DashboardPage);
