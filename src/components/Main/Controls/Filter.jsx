import React from "react";
import { useState } from "react";
import GetElementFilter from "./GetElementFilter";

const Filter = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filterValues = ["all", "Movies only", "Series only"];

  return (
    <form action="#">
      {filterValues.map((value) => {
        return (
          <GetElementFilter
            key={value}
            value={value}
            filter={filter}
            handleChange={handleChange}
          />
        );
      })}
    </form>
  );
};

export default Filter;
