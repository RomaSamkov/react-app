import { ADD_BOOK } from "./types";

export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};
