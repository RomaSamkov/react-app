import BooksPage from "pages/BooksPage/BooksPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import HomePage from "pages/HomePage/HomePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import PostsSearchPage from "pages/PostsSearchPage/PostsSearchPage";
import SinglePostsPage from "pages/SinglePostsPage/SinglePostsPage";
import VotePage from "pages/VotePage/VotePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsSearchPage />} />
      <Route path="/posts/:id" element={<SinglePostsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/vote" element={<VotePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
