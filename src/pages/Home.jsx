import React, { useState, useEffect } from "react";

import SearchArea from "../SearchArea/SearchArea";
import List from "../List/List";

const Home = () => {
  const [listItems, setListItems] = useState([]);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    const response = await fetch(
      `http://localhost:4000/words?offset=${offset}`
    );
    const responseJson = await response.json();

    if (responseJson.length === 0) {
      setHasMore(false);
      return;
    }

    setListItems((prev) => [...prev, ...responseJson]);
    setOffset((prev) => prev + 20);
  };

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
      <List
        listElements={listItems}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </>
  );
};

export default Home;
