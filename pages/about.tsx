import React from "react";
import UnderConstruction from "../src/components/UnderConstruction";

const About = () => {
  return <UnderConstruction />;
};
About.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default About;
