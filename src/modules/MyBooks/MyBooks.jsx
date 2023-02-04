import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "redux/actions";
import { getBooks } from "redux/selectors";

const MyBooks = () => {
  const books = useSelector(getBooks);
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
        <input name="filter" type="text" placeholder="Enter name of book" />
        <BookList books={books} removeBook={onRemoveBook} />
      </Container>
    </div>
  );
};

export default MyBooks;
