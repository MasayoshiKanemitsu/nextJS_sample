import Image from "next/image";
import React from "react";

//SCSS
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
    </>
  );
};

export default Header;
