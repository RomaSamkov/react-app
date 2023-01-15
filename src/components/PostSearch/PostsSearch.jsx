import { useEffect, useState } from "react";
import { searchPosts } from "../../servises/api/posts";
import Modal from "../../servises/components/Modal/Modal";
import PostList from "../../servises/components/PostList/PostList";
import styles from "./PostsSearch.module.scss";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

const modalInitialState = {
  title: "",
  body: "",
};

const PostsSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ ...modalInitialState });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await searchPosts(search, page);
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search, page]);

  const onSearch = ({ search }) => {
    setSearch(search);
    setPage(1);
    setItems([]);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (modalContent) => {
    setModalOpen(true);
    setModalContent({ ...modalContent });
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ ...modalInitialState });
  };

  const isPosts = Boolean(items.length);

  return (
    <div>
      {modalOpen && (
        <Modal close={closeModal}>
          <h3 className={styles.postTitle}>{modalContent.title}</h3>
          <p className={styles.postContent}>{modalContent.body}</p>
        </Modal>
      )}
      <PostsSearchForm onSubmit={onSearch} />
      {isPosts && <PostList items={items} onClick={openModal} />}
      {loading && <p>....Loading posts</p>}
      {error && <p>Cannot download posts</p>}
      {isPosts && <button onClick={loadMore}>load more</button>}
    </div>
  );
};

// class PostsSearch extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//     search: "",
//     page: 1,
//     modalOpen: false,
//     modalContent: {
//       title: "",
//       body: "",
//     },
//   };

//   componentDidUpdate(_, prevState) {
//     const { search, page } = this.state;
//     if ((search && prevState.search !== search) || page !== prevState.page) {
//       this.fetchPosts();
//     }
//   }

//   async fetchPosts() {
//     const { search, page } = this.state;
//     this.setState({
//       loading: true,
//     });

//     try {
//       const data = await searchPosts(search, page);
//       this.setState(({ items }) => ({
//         items: [...items, ...data],
//       }));
//     } catch (error) {
//       this.setState({
//         error,
//       });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   onSearch = ({ search }) => {
//     this.setState({
//       search,
//     });
//   };

//   loadMore = () => {
//     this.setState(({ page }) => ({
//       page: page + 1,
//     }));
//   };

//   openModal = (modalContent) => {
//     this.setState({
//       modalOpen: true,
//       modalContent,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       modalOpen: false,
//       modalContent: {
//         title: "",
//         body: "",
//       },
//     });
//   };

//   render() {
//     const { onSearch, loadMore, openModal, closeModal } = this;
//     const { items, loading, error, modalOpen, modalContent } = this.state;
//     const isPosts = Boolean(items.length);

//     return (
//       <div>
//         <h1 className={styles.holiday}>
//           Happy Holiday !!! Happy New Year !!! <br />
//           Happy developer. React.
//         </h1>
//         {modalOpen && (
//           <Modal close={closeModal}>
//             <h3 className={styles.postTitle}>{modalContent.title}</h3>
//             <p className={styles.postContent}>{modalContent.body}</p>
//           </Modal>
//         )}
//         <PostsSearchForm onSubmit={onSearch} />
//         {isPosts && <PostList items={items} onClick={openModal} />}
//         {loading && <p>...Loading posts!!!</p>}
//         {error && <p>Failed Loading posts!</p>}
//         {isPosts && <button onClick={loadMore}>Load More</button>}
//       </div>
//     );
//   }
// }

export default PostsSearch;
