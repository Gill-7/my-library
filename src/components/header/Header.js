import React from "react";

function Header({ align }) {
  return (
    <div
      className={`flex items-center justify-${align} pl-10 font-mono text-left`}
    >
      <h6 className="text-5xl my-8 mt-12">Readers</h6>
    </div>
  );
}
export default Header;
