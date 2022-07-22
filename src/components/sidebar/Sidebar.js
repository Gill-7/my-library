import React from "react";
import classes from "./Sidebar.module.css";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <Header />
      <div>
        <NavLink
          to="/reading"
          activeclassname="active"
          className={classes.link}
        >
          Reading Now
        </NavLink>
        <NavLink
          to="/future-reading"
          activeclassname="active"
          className={classes.link}
        >
          Wants to Read
        </NavLink>
        <NavLink
          to="/past-reading"
          activeclassname="active"
          className={classes.link}
        >
          Read
        </NavLink>
        <NavLink
          to="/collection"
          activeclassname="active"
          className={classes.link}
        >
          Collection
        </NavLink>
        <NavLink to="/search" className={`${classes.link} ${classes.link_btn}`}>
          <div className={classes.link_btn_text}>Search</div>
          <div className={classes.link_btn_icon}>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
