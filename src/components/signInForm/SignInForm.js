import { useState } from "react";
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
      const { user } = await signinWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="flex flex-col w-80">
      <h2 className="my-2.5 mx-0">Already have an account?</h2>
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
        <div className="flex justify-between">
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
