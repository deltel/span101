import React from "react";
import "./SearchArea.css";

const SearchArea = ({ searchTerm, handleChange, handleKeyUp }) => (
  <div className="SearchArea">
    <input
      type="text"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={searchTerm}
    />
    <button type="submit">Search</button>
  </div>
);

export default SearchArea;
