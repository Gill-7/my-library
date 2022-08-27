import classes from "./Button.module.css";

const Button = ({ children, ...otherprops }) => {
  return (
    <button className={classes["button-container"]} {...otherprops}>
      {children}
    </button>
  );
};

export default Button;
