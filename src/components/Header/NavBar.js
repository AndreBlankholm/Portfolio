import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="nav">
        <div className="navBarTitle">
            Andre Blankholm
        </div>
        <ul className="navItems">
          <li>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"portfolio"}>Portfoilo</NavLink>
          </li>
          <li>
            <NavLink to={"resume"}>Resume</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
