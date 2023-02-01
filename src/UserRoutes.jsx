import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const BooksPage = lazy(() => import("pages/BooksPage/BooksPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const PostsSearchPage = lazy(() =>
  import("pages/PostsSearchPage/PostsSearchPage")
);
const SinglePostsCommentsPage = lazy(() =>
  import("pages/SinglePostsCommentsPage/SinglePostsCommentsPage")
);
const SinglePostsPage = lazy(() =>
  import("pages/SinglePostsPage/SinglePostsPage")
);
const VotePage = lazy(() => import("pages/VotePage/VotePage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsSearchPage />} />
        <Route path="/posts/:id" element={<SinglePostsPage />}>
          <Route path="comments" element={<SinglePostsCommentsPage />} />
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
