import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = ({ listElements, fetchMoreData, hasMore }) => {
  const cards = (
    <InfiniteScroll
      dataLength={listElements.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {listElements.map(({ id, value }) => (
        <ListItem word={value} key={id} />
      ))}
    </InfiniteScroll>
  );

  return <ul className="List">{cards}</ul>;
};

export default List;
