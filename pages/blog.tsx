import React from "react";
import UnderConstruction from "../src/components/UnderConstruction";

const Blog = () => {
  return <UnderConstruction />;
};
Blog.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Blog;
