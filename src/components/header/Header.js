import React from "react";

function Header() {
  const divStyle = {
    textAlign: "center",
    fontFamily: "monospace",
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const h1Style = {
    fontSize: "2.8rem",
    flexWrap: "nowrap",
  };

  return (
    <div style={divStyle}>
      <h6 style={h1Style}>Readers</h6>
    </div>
  );
}
export default Header;
