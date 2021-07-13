import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = ({ handleClose }) => (
  <>
    <div className="Overlay" onClick={handleClose} />
    <nav className="Sidebar" aria-label="Sidebar">
      <ul>
        <NavLink activeClassName="active" exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/new-word">
          <li>New Word</li>
        </NavLink>
        <NavLink activeClassName="active" to="/categories">
          <li>Categories</li>
        </NavLink>
        <NavLink activeClassName="active" to="/conjugation">
          <li>Conjugation</li>
        </NavLink>
      </ul>
    </nav>
  </>
);

export default Sidebar;
