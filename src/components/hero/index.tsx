import React from "react";
import Catagory from "./Catagory";
import Banner from "./Banner";
import styles from './hero.module.scss'

const index = () => {
  return (
    <div className={styles.heroContainer}>
      <Catagory />
      <Banner />
    </div>
  );
};

export default index;
