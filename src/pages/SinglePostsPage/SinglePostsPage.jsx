import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "shared/services/posts";

const SinglePostsPage = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getSinglePost(id);
        setState((prevState) => {
          return {
            ...prevState,
            item: result,
          };
        });
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchPosts();
  }, [setState, id]);

  const { title, body } = state.item;

  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default SinglePostsPage;
