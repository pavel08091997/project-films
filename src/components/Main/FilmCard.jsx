import React from "react";
import styles from "./FilmCard.module.css";

const FilmCard = ({Title,Year,Type,Poster}) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={Poster}/>
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">
        {Title}
        </span>
        <div className={styles.info}>
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
