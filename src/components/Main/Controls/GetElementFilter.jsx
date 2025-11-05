import React from "react";


const GetElementFilter = ({ value, filter, handleChange }) => (
  <label>
    <input
      type="radio"
      name="group1"
      value={value}
      checked={filter === value}
      onChange={handleChange}
    />
    <span>{value}</span>
  </label>
);
export default GetElementFilter;
