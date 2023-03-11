import React from "react";
import "./filters.css";
import FilterItem from "./filterItem";
const filters = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem key={filter.id} filter={filter} />;
        })}{" "}
    </div>
  );
};

export default filters;
