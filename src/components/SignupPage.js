import React from "react";
import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";

const SignUpPage = ({ history }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Mathosaurus</h1>
      <SignupForm history={history} />
      <LoginLink text="Already have an account?" />
    </div>
  </div>
);

export default SignUpPage;
