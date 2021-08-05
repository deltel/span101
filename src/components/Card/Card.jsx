import React from "react";
import "./Card.css";

const Card = ({ title, children, optionalClassName }) => (
  <div className={optionalClassName ? `Card ${optionalClassName}` : "Card"}>
    <div className="title">{title}</div>
    <div className="content">{children}</div>
  </div>
);

export default Card;
