import React from "react";
import { connect } from "react-redux";
import GoogleLoginButton from "react-social-login-buttons/lib/buttons/GoogleLoginButton";

import * as actions from "../actions";
import * as routes from "../constants/routes";
import LoginWithEmail from "./LoginWithEmail";
import SignupLink from "./SignupLink";

export class LoginPage extends React.Component {
  componentDidUpdate() {
    if (this.props.authUser) {
      this.props.history.push(routes.DASHBOARD);
    }
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <LoginWithEmail />
          <GoogleLoginButton
            onClick={this.props.loginWithGoogleAuth}
            text={"Log in with Google"}
          />
          <SignupLink />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ authUser: !!state.auth.authUser });

export default connect(
  mapStateToProps,
  actions
)(LoginPage);
