import { Html } from "@react-email/html";
import React from "react";

const ContactEmail = ({
  name,
  email,
  context,
}: {
  email: string;
  name: string;
  context: string;
}) => {
  return (
    <Html lang="en">
      <p>
        Contact Email from, {name} , {email}
      </p>
      <p>
        <p>
          <span>{context}</span>
        </p>
      </p>
    </Html>
  );
};

export default ContactEmail;
