import React from "react";
import UnderConstruction from "../src/components/UnderConstruction";
import ContactPageLayout from "@src/layouts/ContactPageLayout";
import ContactForm from "@components/contactPage/ContactForm";
import ContactPageContent from "@components/contactPage/ContactPageContent";

const Contact = () => {
  return (
    <ContactPageLayout>
      <ContactPageContent />
    </ContactPageLayout>
  );
};
Contact.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Contact;
