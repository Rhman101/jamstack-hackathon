import React from "react";
import { connect } from "react-redux";
import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";
import GoogleLoginButton from "react-social-login-buttons/lib/buttons/GoogleLoginButton";

import * as actions from "../actions";
import LoginWithEmail from "./LoginWithEmail";
import SignupLink from "./SignupLink";

export class LoginPage extends React.Component {
  loginWithGoogle = () => {
    this.props.logInWithAuthProvider("googleAuthProvider");
  };
  loginWithFacebook = () => {
    this.props.logInWithAuthProvider("facebookAuthProvider");
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <LoginWithEmail />
          <GoogleLoginButton
            onClick={this.loginWithGoogle}
            text={"Log in with Google"}
          />
          <FacebookLoginButton
            onClick={this.loginWithFacebook}
            text={"Log in with Facebook"}
          />
          <SignupLink />
        </div>
      </div>
    );
  }
}

export default connect(
  undefined,
  actions
)(LoginPage);
