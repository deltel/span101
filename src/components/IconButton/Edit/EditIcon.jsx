import React from "react";
import { Link } from "react-router-dom";

import "./EditIcon.css";
import "../iconStyle.css";

import Pencil from "../../../assets/images/Pencil.svg";

const EditIcon = ({ id }) => (
  <Link className="EditIcon icon" to={`/edit/${id}`}>
    <img src={Pencil} alt="edit icon" />
  </Link>
);

export default EditIcon;
