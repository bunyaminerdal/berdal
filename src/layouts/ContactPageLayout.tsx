import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ContactFormLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexGrow: "1",
        marginTop: { xs: "0", sm: "50px" },
      }}
    >
      {children}
    </Box>
  );
};

export default ContactFormLayout;
