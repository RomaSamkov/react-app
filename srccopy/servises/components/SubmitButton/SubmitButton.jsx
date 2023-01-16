import styles from "./SubmitButton.module.scss";

const SubmitButton = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
