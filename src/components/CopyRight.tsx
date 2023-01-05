import Typography from "@mui/material/Typography";
import Link from "./BeLink";
import React from "react";

const CopyRight = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://bunyaminerdal.com.tr/">
        Bünyamin Erdal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
