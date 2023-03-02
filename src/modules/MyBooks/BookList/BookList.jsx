import styles from "./book-list.module.scss";

const BookList = ({ books, removeBook }) => {
  const elements = books.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Title :<span className={styles.itemText}> "{title}".</span>
        </p>{" "}
        <p>
          Author: <span className={styles.itemText}> {author}.</span>
        </p>
        <button
          type="button"
          className={styles.btn}
          onClick={() => removeBook(id)}
        >
          X
        </button>
      </div>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default BookList;
