import React from "react";
import { connect } from "react-redux";

import { firebase } from "../services/firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { setAuthUser } = this.props;
      firebase.auth().onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser.uid) : setAuthUser(null);
      });
    }
    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    setAuthUser: authUser =>
      dispatch({
        type: "SET_AUTH",
        authUser
      })
  });

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};

export default withAuthentication;
