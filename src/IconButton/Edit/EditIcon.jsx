import React from "react";
import { Link } from "react-router-dom";

import "./EditIcon.css";
import "../iconStyle.css";

import Pencil from "../../assets/images/Pencil.svg";

const EditIcon = () => (
  <Link className="EditIcon icon" to="/new-word">
    <img src={Pencil} alt="edit icon" />
  </Link>
);

export default EditIcon;
