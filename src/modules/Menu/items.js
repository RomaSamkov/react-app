const { nanoid } = require("nanoid");

const items = [
  {
    id: nanoid(),
    to: "/",
    text: "Home",
  },
  {
    id: nanoid(),
    to: "/posts",
    text: "Posts Search",
  },
  {
    id: nanoid(),
    to: "/my-favorite-books",
    text: "Favorite Books",
  },
  {
    id: nanoid(),
    to: "/books",
    text: "Books",
  },
  {
    id: nanoid(),
    to: "/vote",
    text: "Vote",
  },
];

export default items;
