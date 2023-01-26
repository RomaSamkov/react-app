import React from "react";
import { useParams } from "react-router-dom";

const SinglePostsPage = () => {
  const params = useParams();
  console.log("params:", params);

  return (
    <div className="container">
      <h2>Single Posts Page</h2>
    </div>
  );
};

export default SinglePostsPage;
