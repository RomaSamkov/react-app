import styles from "./Vote.module.scss";

const VoteActions = ({ handleVote }) => {
  return (
    <>
      <div className={styles.btnBlock}>
        <button onClick={() => handleVote("JS")}>JS</button>
      </div>
      <div className={styles.btnBlock}>
        <button onClick={() => handleVote("Phyton")}>Phyton</button>
      </div>
    </>
  );
};

export default VoteActions;
