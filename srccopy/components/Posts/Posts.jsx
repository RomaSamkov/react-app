import { useEffect, useState } from "react";
// import styles from "./Posts.module.scss";
// import axios from "axios";
import { getPosts } from "../../servises/api/posts";
import PostList from "../../servises/components/PostList/PostList";

const Posts = () => {
  const [posts, setPosts] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPosts((prevPosts) => ({
          ...prevPosts,
          loading: true,
        }));
        const data = await getPosts(page);
        setPosts((prevPosts) => ({
          ...prevPosts,
          items: [...prevPosts.items, ...data],
        }));
      } catch (error) {
        setPosts((prevPosts) => ({
          ...prevPosts,
          error,
        }));
      } finally {
        setPosts((prevPosts) => ({
          ...prevPosts,
          loading: false,
        }));
      }
    };

    fetchPosts();
  }, [setPosts, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const { items, loading, error } = posts;

  return (
    <div>
      <h2>Список статей</h2>
      {Boolean(items.length) && <PostList items={items} />}
      {loading && <p>...Loading</p>}
      {error && <p>Posts load fail</p>}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
    </div>
  );
};

// class Posts extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   componentDidMount() {
//     this.fetchPosts();
//   }

//   componentDidUpdate(_, prevState) {
//     const { page } = this.state;
//     if (prevState.page !== page) {
//       this.fetchPosts();
//     }
//   }

//   // fetchPosts() {
//   //   const { page } = this.state;

//   //   this.setState({
//   //     loading: true,
//   //   });
//   //   axios
//   //     .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`)
//   //     .then(({ data }) => {
//   //       this.setState(({ items }) => ({
//   //         items: [...items, ...data],
//   //       }));
//   //     })
//   //     .catch((error) => {
//   //       this.setState({
//   //         error: error,
//   //       });
//   //     })
//   //     .finally(() => {
//   //       this.setState({ loading: false });
//   //     });
//   // }
//   async fetchPosts() {
//     const { page } = this.state;
//     this.setState({
//       loading: true,
//     });

//     try {
//       const data = await getPosts(page);
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

//   loadMore = () => {
//     this.setState(({ page }) => ({
//       page: page + 1,
//     }));
//   };

//   render() {
//     const { items, loading, error } = this.state;
//     const { loadMore } = this;
//     const isPosts = Boolean(items.length);

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>List of Posts:</h2>
//         {isPosts && <PostList items={items} />}
//         {loading && <p>...Loading posts!!!</p>}
//         {error && <p>Failed Loading posts!</p>}
//         {isPosts && <button onClick={loadMore}>Load More</button>}
//       </div>
//     );
//   }
// }

export default Posts;
