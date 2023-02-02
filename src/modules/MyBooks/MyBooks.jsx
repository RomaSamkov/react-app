// import { useState } from "react";
// import { nanoid } from "nanoid";

import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";

import styles from "./my-books.module.css";
import { useSelector } from "react-redux";

const MyBooks = () => {
  const books = useSelector((store) => store.books);
  // const [books, setBooks] = useState([]);
  // const [filter, setFilter] = useState("");

  // const addBook = ({ title, author, favorite }) => {
  //   const newBook = {
  //     title,
  //     author,
  //     favorite,
  //     id: nanoid(),
  //   };
  //   setBooks((prevBooks) => [...prevBooks, newBook]);
  // };

  // const removeBook = (id) => {
  //   setBooks((prevBooks) => prevBooks.filter((item) => item.id !== id));
  // };

  // const handleFilter = ({ target }) => setFilter(target.value);

  // const getFilteredBooks = () => {
  //   if (!filter) {
  //     return books;
  //   }
  //   const filterValue = filter.toLowerCase();
  //   const filteredBooks = books.filter(({ title }) => {
  //     const titleValue = title.toLowerCase();
  //     return titleValue.includes(filterValue);
  //   });

  //   return filteredBooks;
  // };

  // const filteredBooks = getFilteredBooks();

  return (
    <div className={styles.books}>
      <Container title="Add book">
        <FormAddBook />
      </Container>
      <Container title="List of books">
        <input name="filter" type="text" placeholder="Enter name of book" />
        <BookList books={books} />
      </Container>
    </div>
  );
};

export default MyBooks;
