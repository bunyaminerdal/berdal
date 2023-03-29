import React from "react";
import UnderConstruction from "../src/components/UnderConstruction";

const Contact = () => {
  return <UnderConstruction />;
};
Contact.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Contact;
