import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.fontFaceText}>
        This is my student draft while studying :{" "}
      </h2>
      <ul>
        <li className={styles.fontFaceText}>Redux</li>
        <li className={styles.fontFaceText}>HTTP requests in Redux </li>
        <li className={styles.fontFaceText}>used JSONPlaceholder</li>
      </ul>
      <Link className={styles.fontLink} to="/">
        To Main Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
