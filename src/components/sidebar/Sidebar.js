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
        <NavLink
          to="/search"
          className="link link-btn"
          // activeClassName="active"
        >
          <div className="link-btn-text">Search</div>
          <div className="link-btn-icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
