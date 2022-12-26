import { Component } from "react";
import { searchPosts } from "../../servises/api/posts";
import Modal from "../../servises/components/Modal/Modal";
import PostList from "../../servises/components/PostList/PostList";
import styles from "./PostsSearch.module.scss";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

class PostsSearch extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    modalOpen: false,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page !== prevState.page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { search, page } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const data = await searchPosts(search, page);
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

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  render() {
    const { onSearch, loadMore, openModal } = this;
    const { items, loading, error, modalOpen } = this.state;
    const isPosts = Boolean(items.length);

    return (
      <div>
        {modalOpen && <Modal />}
        <PostsSearchForm onSubmit={onSearch} />
        {isPosts && <PostList items={items} onClick={openModal} />}
        {loading && <p>...Loading posts!!!</p>}
        {error && <p>Failed Loading posts!</p>}
        {isPosts && <button onClick={loadMore}>Load More</button>}
      </div>
    );
  }
}

export default PostsSearch;
