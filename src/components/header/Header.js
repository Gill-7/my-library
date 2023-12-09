import React from "react";

function Header() {
  const divStyle = {
    textAlign: "left",
    fontFamily: "monospace",
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  };

  const h1Style = {
    fontSize: "2.5rem",
    flexWrap: "nowrap",
    margin: "1.5rem",
  };

  return (
    <div style={divStyle}>
      <h6 style={h1Style}>Readers</h6>
    </div>
  );
}
export default Header;
