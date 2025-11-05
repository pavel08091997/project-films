import React from "react";
import { useState } from "react";
import GetElementFilter from "./GetElementFilter";

const Filter = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <form action="#">
      <GetElementFilter
        value={"all"}
        filter={filter}
        handleChange={handleChange}
      />
      <GetElementFilter
        value={"Movies only"}
        filter={filter}
        handleChange={handleChange}
      />
      <GetElementFilter
        value={"Series only"}
        filter={filter}
        handleChange={handleChange}
      />
    </form>
  );
};

export default Filter;
