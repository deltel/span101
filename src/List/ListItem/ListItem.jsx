import React from "react";
import { NavLink } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ word, id }) => (
  <li>
    <NavLink to={`/details/${id}`}>
      <div>{word}</div>
    </NavLink>
  </li>
);

export default ListItem;
