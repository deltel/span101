import React, { useState, useEffect } from "react";

import SearchArea from "../SearchArea/SearchArea";
import List from "../List/List";

const Home = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/words");
      const responseJson = await response.json();
      setListItems(responseJson);
    };

    fetchData();
  }, []);

  return (
    <>
      <SearchArea />
      <List listElements={listItems} />
    </>
  );
};

export default Home;
