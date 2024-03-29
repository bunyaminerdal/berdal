import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ContactFormLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "calc(100dvh - 56px)", md: "100%" },
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default ContactFormLayout;
