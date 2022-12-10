import { Component } from "react";
import styles from "./Vote.module.scss";

class Vote extends Component {
  state = {
    JS: 0,
    Phyton: 0,
  };

  countTotal() {
    const { JS, Phyton } = this.state;
    return JS + Phyton;
  }

  countPercentage(propertyName) {
    const total = this.countTotal();
    const value = this.state[propertyName];
    const result = (value / total) * 100;
    return result;
  }

  render() {
    const { JS, Phyton } = this.state;
    const total = this.countTotal();
    const jsPercentage = this.countPercentage("JS");
    const phytonPercentage = this.countPercentage("Phyton");

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
          <div className={styles.btnBlock}>
            For JS:
            <ul>
              <li>All:{JS}</li>
              <li>In percentage:{jsPercentage}%</li>
            </ul>
          </div>
          <div className={styles.btnBlock}>
            For Phyton:
            <ul>
              <li>All:{Phyton}</li>
              <li>In percentage:{phytonPercentage}%</li>
            </ul>
          </div>
          <div className={styles.btnBlock}>All votes: {total} votes</div>
        </div>
      </div>
    );
  }
}

export default Vote;
