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
    modalContent: {
      title: "",
      body: "",
    },
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

  openModal = (modalContent) => {
    this.setState({
      modalOpen: true,
      modalContent,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: {
        title: "",
        body: "",
      },
    });
  };

  render() {
    const { onSearch, loadMore, openModal, closeModal } = this;
    const { items, loading, error, modalOpen, modalContent } = this.state;
    const isPosts = Boolean(items.length);

    return (
      <div>
        <h1 className={styles.holiday}>
          Happy Holiday !!! Happy New Year !!! <br />
          Happy developer.
        </h1>
        {modalOpen && (
          <Modal close={closeModal}>
            <h3 className={styles.postTitle}>{modalContent.title}</h3>
            <p className={styles.postContent}>{modalContent.body}</p>
          </Modal>
        )}
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
