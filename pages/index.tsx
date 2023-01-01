// pages/index.tsx

import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ThemeChangeButton from "../src/components/ThemeChangeButton";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography component="h1" color="primary">
        Material UI v5 with Next.js in TypeScript
      </Typography>
      <Typography component="h2" color="secondary">
        Boilerplate for building faster.
      </Typography>
    </Box>
  );
};

export default Home;
