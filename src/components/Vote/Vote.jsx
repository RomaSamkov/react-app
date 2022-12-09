import { Component } from "react";
import styles from "./Vote.module.scss";

class Vote extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h2 className={styles.heading}>Vote for:</h2>
          <div className={styles.btnBlock}>
            <button>JS</button>
          </div>
          <div className={styles.btnBlock}>
            <button>Phyton</button>
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.heading}>Results:</h2>
          <div className={styles.btnBlock}>For JS: 50%</div>
          <div className={styles.btnBlock}>For Phyton: 50%</div>
          <div className={styles.btnBlock}>All votes: 50 votes</div>
        </div>
      </div>
    );
  }
}

export default Vote;
