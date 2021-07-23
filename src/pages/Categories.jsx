import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import List from "../List/List";
import fetchWords from "../utils/executeGet";
import { endpoint } from "../constants/constants";

const Categories = () => {
  const { push } = useHistory();
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setListItems(await fetchWords(`${endpoint.base}/words/categories`));
    };

    fetchData();
  }, []);

  const handleClick = async (e, category) => {
    e.preventDefault();

    const response = await fetchWords(
      `${endpoint.base}/words?category=${category}`
    );
    localStorage.setItem("currentCategory", category);
    localStorage.setItem("categoryItems", JSON.stringify(response));

    push("/");
  };

  return (
    <List
      listElements={listItems}
      fetchMoreData={undefined}
      hasMore={false}
      handleClick={handleClick}
      isCategory
    />
  );
};

export default Categories;
