import styles from "./Vote.module.scss";

const VoteActions = ({ handleVote }) => {
  return (
    <div className={styles.btnBlock}>
      <button className={styles.btn} onClick={() => handleVote("JS")}>
        JavaScript
      </button>

      <button className={styles.btn} onClick={() => handleVote("Phyton")}>
        Phyton
      </button>
    </div>
  );
};

export default VoteActions;
