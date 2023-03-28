import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import React from "react";

const VerifyEmail = ({ url, name }: { url: string; name: string }) => {
  return (
    <Html lang="en">
      <p>Hi, {name}</p>
      <p>
        <p>
          <span>Your account has been created.</span>
        </p>
        <p>
          <span>You should verify your email to log in.</span>
        </p>
        <p>
          <span>Verify your email using the link below</span>
        </p>
      </p>
      <p>
        <Button href={url}>Verify Email</Button>
      </p>
    </Html>
  );
};

export default VerifyEmail;
