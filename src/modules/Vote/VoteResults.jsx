import styles from "./Vote.module.scss";

const VoteResults = ({ total, JS, Phyton, jsPercentage, phytonPercentage }) => {
  return (
    <>
      <div className={styles.result}>
        <h2 className={styles.name}>For JavaScript:</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            All : <span className={styles.span}>{JS}</span>
          </li>
          <li className={styles.item}>
            In percentage :<span className={styles.span}>{jsPercentage}%</span>
          </li>
        </ul>
      </div>
      <div className={styles.result}>
        <h2 className={styles.name}>For Phyton:</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            All : <span className={styles.span}>{Phyton}</span>
          </li>
          <li className={styles.item}>
            In percentage :
            <span className={styles.span}>{phytonPercentage}%</span>
          </li>
        </ul>
      </div>
      <div className={styles.resultBlock}>
        All votes : <span className={styles.span}> {total}</span>
      </div>
    </>
  );
};

export default VoteResults;
