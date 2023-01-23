import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>Not found Page</h2>
      <Link to="/">To Main Page</Link>
    </div>
  );
};

export default NotFoundPage;
