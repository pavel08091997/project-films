import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <p>Project Films</p>
      </div>
    </header>
  );
};

export default Header;
