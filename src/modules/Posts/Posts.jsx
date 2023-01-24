import React, { useState } from "react";

const Posts = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  return <div>Posts</div>;
};

export default Posts;
