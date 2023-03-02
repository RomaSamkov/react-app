import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./PostList.module.scss";

const PostList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link
        state={{ from: location }}
        to={`/posts/${id}`}
        className={styles.link}
      >
        {title}
      </Link>
    </li>
  ));
  return <ol>{elements}</ol>;
};

export default PostList;

PostList.defaultProps = {
  items: [],
};
