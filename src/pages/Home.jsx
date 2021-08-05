import React, { useState, useEffect, useRef } from "react";

import SearchArea from "../components/SearchArea/SearchArea";
import List from "../components/List/List";
import fetchWords from "../utils/executeGet";
import { endpoint } from "../constants/constants";

const Home = () => {
  const [listItems, setListItems] = useState([]);
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const timer = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("currentCategory")) return () => {};

    setListItems(JSON.parse(localStorage.getItem("categoryItems")));
    setHasMore(false);
    return () => {
      localStorage.removeItem("currentCategory");
      localStorage.removeItem("categoryItems");
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("currentCategory")) return;

    const fetchData = async () => {
      setListItems(await fetchWords(`${endpoint.base}/words`));
    };

    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const result = await fetchWords(`${endpoint.base}/words?offset=${offset}`);

    if (result.length === 0) {
      setHasMore(false);
      return;
    }

    setListItems((prev) => [...prev, ...result]);
    setOffset((prev) => prev + 20);
  };

  const searchForWord = async () => {
    setListItems(
      await fetchWords(`${endpoint.base}/words?search=${searchTerm}`)
    );
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
