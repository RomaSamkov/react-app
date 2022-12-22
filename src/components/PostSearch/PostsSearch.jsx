import { Component } from "react";
import PostList from "../../servises/components/PostList/PostList";
import styles from "./PostsSearch.module.scss";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

class PostsSearch extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
  };

  render() {
    return (
      <div>
        <PostsSearchForm />
        <PostList />
      </div>
    );
  }
}

export default PostsSearch;
