import React from "react";
import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import classes from "./Authentication.module.css";

const Authentication = () => {
  return (
    <div className={classes["authentication-container"]}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
