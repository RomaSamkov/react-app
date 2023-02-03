import { createStore } from "redux";

const initialStore = {
  books: [
    {
      id: "1",
      title: "JS",
      author: "Developer",
      favorite: true,
    },
    {
      id: "2",
      title: "TS",
      author: "Junior",
      favorite: false,
    },
  ],
};

const reducer = (store = initialStore) => {
  return store;
};

const store = createStore(reducer);

export default store;
