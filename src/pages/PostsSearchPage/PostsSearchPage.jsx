import PostList from "modules/PostList/PostList";
import PostsSearchForm from "modules/PostsSearchForm/PostsSearchForm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchPosts } from "shared/services/posts";
import styles from "./PostsSearchPage.module.scss";

const PostsSearchPage = () => {
  const [state, setState] = useState({
    items: {},
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));

        const data = await searchPosts(search);

        setState((prevState) => ({ ...prevState, items: data }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  const { items } = state;
  return (
    <div className="container">
      <h2 className={styles.title}>Posts Search</h2>
      <PostsSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <PostList items={items} />}
    </div>
  );
};

export default PostsSearchPage;
