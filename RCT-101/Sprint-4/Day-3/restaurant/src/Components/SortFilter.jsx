import React from "react";

export const SortFilter = ({ filterHandler, sortHandler }) => {
  return (
    <div className="main">
      <div className="filter">
        Filter Product By:
        <select onChange={(e) => filterHandler(e.target.value)}>
          <option value="rating">Rating</option>
          <option value="star5">More than 4.5 Star </option>
          <option value="star4">More than 4 Star </option>
          <option value="star3">More than 3.5 Star </option>
          <option value="star2">More than 3 Star </option>
        </select>
      </div>
      <div className="sort">
        Sort Product By:
        <select onChange={(e) => sortHandler(e.target.value)}>
          <option value="price">Price</option>
          <option value="htl">High To Low</option>
          <option value="lth">Low To High</option>
        </select>
      </div>
    </div>
  );
};
