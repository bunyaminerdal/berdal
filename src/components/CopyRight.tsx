import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as MUILink } from "@mui/material";

const CopyRight = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        flexDirection: "row",
      }}
    >
      <Typography color="text.primary" variant="body2">
        {"Copyright ©"}
      </Typography>
      <MUILink href="https://bunyaminerdal.com.tr">
        <Typography color="text.primary" textTransform="none" variant="body2">
          {"Bünyamin ERDAL"}
        </Typography>
      </MUILink>
      <Typography color="text.primary" variant="body2">
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default CopyRight;
