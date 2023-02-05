import { ADD_BOOK, REMOVE_BOOK } from "./types";

const initialStore = {
  books: [],
  filter: "",
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return { ...store, books: [...store.books, payload] };
    case REMOVE_BOOK:
      const newBooks = store.books.filter(({ id }) => id !== payload);
      return { ...store, books: newBooks };

    default:
      return store;
  }
};

export default reducer;
