import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "redux/actions";
import { getBooks, getFilter } from "redux/selectors";

const MyBooks = () => {
  const books = useSelector(getBooks);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddBook = (payload) => {
    const action = addBook(payload);
    dispatch(action);
  };

  const onRemoveBook = (payload) => {
    dispatch(removeBook(payload));
  };

  return (
    <div className={styles.books}>
      <Container title="Add book">
        <FormAddBook onSubmit={onAddBook} />
      </Container>
      <Container title="List of books">
        <input
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
