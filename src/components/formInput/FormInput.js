const FormInput = ({ label, ...otherprops }) => {
  return (
    <div className="my-4">
      <label className="text-sm text-input-label">{label}</label>
      <input
        className="text-sm px-2 py-2 block w-full rounded-lg my-1 mx-0 border border-input-border hover:border-input-border-hover 
        "
        {...otherprops}
      />
    </div>
  );
};

export default FormInput;
