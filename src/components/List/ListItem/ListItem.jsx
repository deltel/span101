import React from "react";
import { NavLink } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ word, id, handleClick }) => (
  <li>
    <NavLink
      to={`/details/${id}`}
      onClick={handleClick && ((e) => handleClick(e, word))}
    >
      <div>{word}</div>
    </NavLink>
  </li>
);

export default ListItem;
