const Button = ({ children, ...otherprops }) => {
  return (
    <button
      className="w-full h-10 mt-2 mb-2  border-0 rounded-lg bg-button-bg text-button-text hover:bg-button-bg-hover"
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;

// .button-container {
//   min-width: 150px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 1.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 15px;
//   background: var(--bg);
//   color: var(--black);
//   text-transform: uppercase;
//   font-weigth: 600;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   border: 1.5px solid var(--black);
// }

// .button-container:hover {
//   background-color: var(--border);
//   color: var(--black);
//   border: 1.5px solid var(--black);
// }
