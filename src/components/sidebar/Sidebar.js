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
          className={({ isActive }) =>
            isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
          }
        >
          Reading Now
        </NavLink>
        <NavLink
          to="/future-reading"
          className={({ isActive }) =>
            isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
          }
        >
          Wants to Read
        </NavLink>
        <NavLink
          to="/past-reading"
          className={({ isActive }) =>
            isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
          }
        >
          Read
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
          }
        >
          Collection
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.link_btn}`
              : `${classes.link} ${classes.link_btn}`
          }
        >
          <div className={classes.link_btn_text}>Search</div>
          <div className={classes.link_btn_icon}>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </NavLink>
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
          }
        >
          Sign in
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
