import React from "react";
import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";

const SignUpPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <SignupForm />
      <LoginLink text="Already have an account?" />
    </div>
  </div>
);

export default SignUpPage;
