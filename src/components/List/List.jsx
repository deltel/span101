import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = ({
  listElements,
  fetchMoreData,
  hasMore,
  isCategory,
  handleClick,
}) => {
  const cards = isCategory ? (
    listElements.map(({ keyword }) => (
      <ListItem word={keyword} key={keyword} handleClick={handleClick} />
    ))
  ) : (
    <InfiniteScroll
      dataLength={listElements.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {listElements.map(({ id, value }) => (
        <ListItem word={value} key={id} id={id} />
      ))}
    </InfiniteScroll>
  );

  return <ul className="List">{cards}</ul>;
};

export default List;
