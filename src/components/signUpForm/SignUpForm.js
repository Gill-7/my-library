import { useState } from "react";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentWithAuth,
} from "../../utils/firebase/Firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentWithAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="flex flex-col w-80">
      <h2 className="my-2.5 mx-0">Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={changeHandler}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
