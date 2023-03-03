import React, { useState } from "react";
import styles from "./PostsSearchForm.module.scss";

const PostsSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: "",
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="search"
        value={state.search}
        onChange={handleChange}
        placeholder="Search"
        required
      />
      <button type="submit" className={styles.btn}>
        Search 🔎
      </button>
    </form>
  );
};

export default PostsSearchForm;
