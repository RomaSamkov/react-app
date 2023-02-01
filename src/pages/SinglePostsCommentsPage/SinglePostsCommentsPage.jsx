import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "shared/services/posts";

const SinglePostsCommentsPage = () => {
  const { id } = useParams();

  const [state, setState] = useState({
    items: [],
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

        const result = await getPostComments(id);
        setState((prevState) => {
          return {
            ...prevState,
            items: result,
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

  const { items } = state;

  const elements = items.map(({ id, name, email, body }) => (
    <li key={id}>
      <p>
        Name:{name} *** Email:{email}
      </p>
      {body}
    </li>
  ));

  return (
    <div className="container">
      <ul>{elements}</ul>
    </div>
  );
};

export default SinglePostsCommentsPage;
