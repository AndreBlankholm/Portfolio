import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {


  
  return (
    <div className="navBar-container">
      <nav className="nav">
        <div className="navBarTitle">
          <NavLink to={"/"}>
            <h2 className="navBarName">Andre Blankholm</h2>
          </NavLink>
        </div>
        <div className="navbarLinks">
          <ul className="navItems">
            <li>
              <NavLink to={"portfolio"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"resume"}>Resume</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
