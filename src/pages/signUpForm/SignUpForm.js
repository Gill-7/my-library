import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormInput from "../../components/formInput/FormInput";
import Button from "../../components/button/Button";
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
    <div className="flex flex-col border border-form-label px-8 py-8">
      <h2 className="text-center text-2xl font-bold tracking-tight mb-2">
        Create an account?
      </h2>
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
        <div className="text-slate-500 text-sm">
          Already a member?{" "}
          <NavLink
            to="/auth/sign-in"
            className="text-slate-900 font-medium hover:underline"
          >
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
