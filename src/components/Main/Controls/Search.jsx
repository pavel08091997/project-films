import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ setSearchFilm }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="search"
        name="search"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={() => setSearchFilm(value)}>
        Search
      </button>
    </div>
  );
};

export default Search;
