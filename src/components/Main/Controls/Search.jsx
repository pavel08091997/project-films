import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.inputContainer}>
      <input type="text" placeholder="search" name="search"></input>
    </form>
  );
};

export default Search;
