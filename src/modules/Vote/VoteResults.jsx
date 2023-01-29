import styles from "./Vote.module.scss";

const VoteResults = ({ total, JS, Phyton, jsPercentage, phytonPercentage }) => {
  return (
    <>
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
    </>
  );
};

export default VoteResults;
