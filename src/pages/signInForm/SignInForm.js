import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import FormInput from "../../components/formInput/FormInput";
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
    <div className="flex flex-col border border-slate-800 px-8 py-8">
      <h2 className="text-center text-2xl font-bold tracking-tight mb-2">
        Sign in to your account
      </h2>
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
        <Button>Sign In</Button>
        <div className="text-slate-500 text-sm">
          Not a member?{" "}
          <NavLink
            to="/auth/sign-up"
            className="text-slate-900  font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
