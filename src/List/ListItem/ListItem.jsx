import React from "react";
import { NavLink } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ word }) => (
  <li>
    <NavLink to="/id">
      <div>{word}</div>
    </NavLink>
  </li>
);

export default ListItem;
