import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

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
  state = {};

  render() {
    return (
      <div>
        <div style={topLayout}>
          <Typography component="h2" variant="h2" style={{ fontFamily: "Titillium Web" }}>
            Mathosaurus X
          </Typography>
          <Typography component="h3" variant="h4">
            Welcome, Learner!
          </Typography>
        </div>
        <div style={bottomLayout}>
          <LoginForm />
          <h2 style={{ fontFamily: "Titillium Web" }}>Or</h2>
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default LandingPage;
