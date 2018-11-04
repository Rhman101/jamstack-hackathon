import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as routes from "../constants/routes";

const topLayout = {
  width: "100%",
  height: "40vh",
  background: "pink",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

const bottomLayout = {
  width: "100%",
  height: "60vh",
  background: "pink",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column"
};

class LandingPage extends Component {
  redirectToSignup = () => {
    this.props.history.push(routes.SIGNUP);
  };

  redirectToLogin = () => {
    this.props.history.push(routes.LOGIN);
  };

  render() {
    return (
      <div>
        <div style={topLayout}>
          <Typography
            component="h2"
            variant="h2"
            style={{ fontFamily: "Titillium Web" }}
          >
            Math Monsters
          </Typography>
          <Typography component="h3" variant="h4">
            Welcome, Learner!
          </Typography>
        </div>
        <div style={bottomLayout}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.redirectToSignup}
          >
            Sign Up
          </Button>
          <h2 style={{ fontFamily: "Titillium Web" }}>Or</h2>
          <Button variant="outlined" onClick={this.redirectToLogin}>
            Log In
          </Button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
