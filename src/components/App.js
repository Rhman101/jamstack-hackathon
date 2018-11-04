import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import withAuth from "./withAuth";
import * as routes from "../constants/routes";

import LandingPage from "./LandingPage";
import DashboardPage from "./DashboardPage";
import GameSetupPage from "./GameSetupPage";
import GamePage from "./GamePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path={routes.LANDING} exact component={LandingPage} />
            <Route path={routes.LOGIN} component={LoginPage} />
            <Route path={routes.SIGNUP} component={SignupPage} />
            <Route path={routes.DASHBOARD} component={DashboardPage} />
            <Route path={routes.GAME} exact component={GamePage} />
            <Route path={routes.NEW_GAME} component={GameSetupPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withAuth(App);
