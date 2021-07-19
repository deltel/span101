import React from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = ({ listElements }) => {
  const cards = listElements.map(({ id, value }) => (
    <ListItem word={value} key={id} />
  ));

  return <ul className="List">{cards}</ul>;
};

export default List;
