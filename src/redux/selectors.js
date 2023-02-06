export const getBooks = (store) => store.books;
export const getFavoriteBooks = (store) => {
  const favoriteBooks = store.books.filter(({ favorite }) => favorite);
  return favoriteBooks;
};
export const getFilter = ({ filter }) => filter;
export const getFilteredBooks = ({ books, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const result = books.filter(({ title, author }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    return (
      normalizedTitle.includes(normalizedFilter) ||
      normalizedAuthor.includes(normalizedFilter)
    );
  });
  return result;
};
