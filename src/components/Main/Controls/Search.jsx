import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className={styles.inputContainer}>
      <input type="text" placeholder="search" name="search" value={value} onChange={handleChange} />
    </form>
  );
};

export default Search;
