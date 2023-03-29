import React from "react";
import UnderConstruction from "../src/components/UnderConstruction";

const Projects = () => {
  return <UnderConstruction />;
};
Projects.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Projects;
