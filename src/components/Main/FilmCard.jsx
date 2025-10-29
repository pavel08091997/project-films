import React from "react";
import styles from "./FilmCard.module.css";

const FilmCard = () => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">
          Game of Thrones
        </span>
        <div className={styles.info}>
          <p>2011–2019</p>
          <p>Series</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
