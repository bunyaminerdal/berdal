import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import React from "react";

const Email = ({ url, name }: { url: string; name: string }) => {
  return (
    <Html lang="en">
      Hi, {name}
      <Button href={url}>Verify Email</Button>
    </Html>
  );
};

export default Email;
