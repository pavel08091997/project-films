import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form>
      <input
        className={styles.search}
        placeholder="search"
        type="text"
        name="search"
      />
      <label>
        <input name="group1" type="radio" checked />
        <span>All</span>
      </label>
    </form>
  );
};

export default Search;
