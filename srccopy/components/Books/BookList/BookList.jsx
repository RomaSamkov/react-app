import styles from "./BookList.module.scss";
import PropTypes from "prop-types";

const BookList = ({ items, removeBook }) => {
  const elements = items.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      Title: {title}, Author: {author}
      <span onClick={() => removeBook(id)} className={styles.remove}>
        X
      </span>
    </li>
  ));
  return (
    <>
      <h4 className={styles.title}>List of Books:</h4>
      <ol>{elements}</ol>
    </>
  );
};

export default BookList;

BookList.defaultProps = {
  items: [],
};

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};
