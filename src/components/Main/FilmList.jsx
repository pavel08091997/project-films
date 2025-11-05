import React from "react";
import FilmCard from "./FilmCard";
import styles from "./FilmList.module.css";

const FilmList = ({ filmList = [] }) => {
  return (
    <div className={styles.list}>
      {filmList.map((item) => (
        <FilmCard
          key={item.imdbID}
          Title={item.Title}
          Year={item.Year}
          Type={item.Type}
          Poster={item.Poster}
        />
      ))}
    </div>
  );
};

export default FilmList;
