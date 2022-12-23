import { Component } from "react";
import { searchPosts } from "../../servises/api/posts";
import PostList from "../../servises/components/PostList/PostList";
import styles from "./PostsSearch.module.scss";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

class PostsSearch extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
  };

  componentDidUpdate(_, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await searchPosts(page);
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

  onSearch = ({ search }) => {
    this.setState({
      search,
    });
  };

  render() {
    const { onSearch } = this;

    return (
      <div>
        <PostsSearchForm onSubmit={onSearch} />
        <PostList />
      </div>
    );
  }
}

export default PostsSearch;
