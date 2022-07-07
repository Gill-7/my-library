import React from "react";
import "./Sidebar.css";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <Header />
      <div>
        <NavLink to="/reading" activeClassName="active" className="link">
          Reading Now
        </NavLink>
        <NavLink to="/future-reading" activeClassName="active" className="link">
          Wants to Read
        </NavLink>
        <NavLink to="/past-reading" activeClassName="active" className="link">
          Read
        </NavLink>
        <NavLink to="/collection" activeClassName="active" className="link">
          Collection
        </NavLink>
        <NavLink to="/add-book" className="link link-btn">
          Add New Book
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
