import React, { useState } from "react";

import SearchArea from "../SearchArea/SearchArea";
import List from "../List/List";

const Home = () => {
  const initList = [
    "Uno",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seís",
    "Siete",
    "Ocho",
    "Nueve",
    "Diez",
    "Once",
  ];
  const [listItems] = useState(initList);

  return (
    <>
      <SearchArea />
      <List listElements={listItems} />
    </>
  );
};

export default Home;
