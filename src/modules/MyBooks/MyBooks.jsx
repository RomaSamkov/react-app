import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook, setFilter } from "redux/actions";
import { getFilter, getFilteredBooks } from "redux/selectors";

const MyBooks = () => {
  const books = useSelector(getFilteredBooks);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddBook = (payload) => {
    const action = addBook(payload);
    dispatch(action);
  };

  const onRemoveBook = (payload) => {
    dispatch(removeBook(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.books}>
      <Container title="Add book">
        <FormAddBook onSubmit={onAddBook} />
      </Container>
      <Container title="List of books">
        <label className={styles.label} htmlFor="">
          Filter of books :
        </label>
        <input
          className={styles.input}
          onChange={onSetFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Enter name of book"
        />
        <BookList books={books} removeBook={onRemoveBook} />
      </Container>
    </div>
  );
};

export default MyBooks;
