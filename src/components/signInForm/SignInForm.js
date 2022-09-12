import { useState } from "react";
import classes from "./SignInForm.module.css";
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import { signinWithEmailAndPassword } from "../../utils/firebase/Firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await signinWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className={classes["sign-up-container"]}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={changeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={changeHandler}
        />
        <div className={classes["buttons-container"]}>
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
