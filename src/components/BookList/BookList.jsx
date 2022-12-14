import styles from "./BookList.module.scss";

const BookList = ({ items }) => {
  const elements = items.map((id, title, author) => (
    <li key={id} className={styles.item}>
      Title:{title}, Author:{author}
      <span className={styles.remove}>X</span>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default BookList;
