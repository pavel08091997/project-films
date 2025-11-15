import React from "react";
import { useState } from "react";
import GetElementFilter from "./GetElementFilter";

const Filter = ({setFilterFilm, setIsLoading}) => {
  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setFilterFilm(event.target.value)
    setIsLoading(true)
  };

  const filterValues = ["all", "movie", "series"];
  // filterValues.filter((film) => {
  //   if (film === "all") {
  //     console.log("all");
  //   } else if (film === "Movies only") {
  //     console.log("Movies only");
  //   } else if (film === "Series only") {
  //     console.log("Series only");
  //   }
  // });

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
