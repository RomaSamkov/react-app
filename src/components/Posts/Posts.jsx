import { Component } from "react";
import styles from "./Posts.module.scss";
// import axios from "axios";
import { getPosts } from "../../servises/api/posts";
import PostList from "../../servises/components/PostList/PostList";

class Posts extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPosts();
    }
  }

  // fetchPosts() {
  //   const { page } = this.state;

  //   this.setState({
  //     loading: true,
  //   });
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`)
  //     .then(({ data }) => {
  //       this.setState(({ items }) => ({
  //         items: [...items, ...data],
  //       }));
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error: error,
  //       });
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // }
  async fetchPosts() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await getPosts(page);
      this.setState(({ items }) => ({
        items: [...items, ...data],
      }));
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { items, loading, error } = this.state;
    const { loadMore } = this;
    const isPosts = Boolean(items.length);

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>List of Posts:</h2>
        {isPosts && <PostList items={items} />}
        {loading && <p>...Loading posts!!!</p>}
        {error && <p>Failed Loading posts!</p>}
        {isPosts && <button onClick={loadMore}>Load More</button>}
      </div>
    );
  }
}

export default Posts;
