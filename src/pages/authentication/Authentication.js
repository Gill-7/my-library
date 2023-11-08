import React from "react";
import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const Authentication = () => {
  return (
    <div className="flex justify-between my-[20px] mx-auto max-w-4xl">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
