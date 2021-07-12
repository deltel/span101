import React from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = ({ listElements }) => {
  const cards = listElements.map((word, index) => (
    <ListItem word={word} key={`List-item${index}`} />
  ));

  return <ul className="List">{cards}</ul>;
};

export default List;
