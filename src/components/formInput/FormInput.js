import classes from "./FormInput.module.css";

const FormInput = ({ label, ...otherprops }) => {
  const other = otherprops.value.length;
  return (
    <div className={classes["group"]}>
      <input className={classes["form-input"]} {...otherprops} />
      {label && (
        <label
          className={
            other
              ? classes["combine-form-input-label-shrink"]
              : classes["form-input-label"]
          }
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
