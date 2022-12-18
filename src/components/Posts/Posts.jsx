import { Component } from "react";
import styles from "./Posts.module.scss";
import axios from "axios";

class Posts extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1_limit=12")
      .then(({ data }) =>
        this.setState({
          items: data,
        })
      )
      .catch((error) => console.log(error.message));
  }
  render() {
    const { items } = this.state;
    const element = items.map(({ id, title }) => (
      <li key={id} className={styles.item}>
        {title}
      </li>
    ));

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>List of Posts:</h2>
        <ul className={styles.list}>{element}</ul>
      </div>
    );
  }
}

export default Posts;
