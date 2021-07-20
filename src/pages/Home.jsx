import React, { useState, useEffect, useRef } from "react";

import SearchArea from "../SearchArea/SearchArea";
import List from "../List/List";

const Home = () => {
  const [listItems, setListItems] = useState([]);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const timer = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/words");
      const responseJson = await response.json();
      setListItems(responseJson);
    };

    fetchData();
  }, []);

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

  const searchForWord = async () => {
    const response = await fetch(
      `http://localhost:4000/words?search=${searchTerm}`
    );
    const responseJson = await response.json();

    setListItems(responseJson);
  };

  const handleKeyUp = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(searchForWord, 750);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchArea
        handleChange={handleChange}
        searchTerm={searchTerm}
        handleKeyUp={handleKeyUp}
      />
      <List
        listElements={listItems}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </>
  );
};

export default Home;
