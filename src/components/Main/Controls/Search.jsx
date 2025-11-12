import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ setSearchFilm }) => {
  const [value, setValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
    if(event.target.value === ''){
      setIsButtonDisabled(true)
    } else{
      setIsButtonDisabled(false)
    }
  };

  const submitChange = (event) => {
    event.preventDefault();
    setValue("");
    setSearchFilm(value)
  };
  return (
    <form onSubmit={submitChange} className={styles.inputContainer}>
      <input
        type="text"
        placeholder="search"
        name="search"
        value={value}
        onChange={handleChange}
      />
      <button
        className={styles.button}
        disabled={isButtonDisabled}
        // disabled={value === ''}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
