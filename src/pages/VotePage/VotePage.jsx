import Vote from "modules/Vote/Vote";
import React from "react";
import styles from "./VotePage.module.scss";

const VotePage = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Vote Results</h2>
      <Vote />
    </div>
  );
};

export default VotePage;
