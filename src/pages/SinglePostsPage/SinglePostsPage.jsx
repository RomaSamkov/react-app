import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getSinglePost } from "shared/services/posts";
import styles from "./SinglePostsPage.module.scss";

const SinglePostsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const location = useLocation();
  const from = location.state?.from || "/posts";

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

  const goBack = () => navigate(from);

  const { title, body } = state.item;

  return (
    <div className="container">
      <button className={styles.btn} onClick={goBack}>
        ⬅ Go Back
      </button>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{body}</p>
      <Link
        className={styles.link}
        state={{ from }}
        to={`/posts/${id}/comments`}
      >
        Comments
      </Link>
      <Outlet />
    </div>
  );
};

export default SinglePostsPage;
