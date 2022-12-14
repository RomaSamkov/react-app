import styles from "./PostList.module.scss";

const PostList = ({ items, onClick }) => {
  const element = items.map(({ id, title, body }) => (
    <li
      key={id}
      className={styles.item}
      onClick={() => onClick({ title, body })}
    >
      {title}
    </li>
  ));

  return <ul className={styles.list}>{element}</ul>;
};

export default PostList;

PostList.defaultProps = {
  items: [],
};
