import Posts from "modules/Posts/Posts";
import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Posts :</h2>
      <Posts />
    </div>
  );
};

export default HomePage;
