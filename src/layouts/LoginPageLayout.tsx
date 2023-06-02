import { Box, Typography, useTheme } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Link as MUILink } from "@mui/material";
import { useRouter } from "next/router";

const LoginPageLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <Box
      width="100%"
      height="100%"
      gap="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h4">{"Sign In"}</Typography>
      {children}
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Typography>{"Don't have an Account?"}</Typography>
        <MUILink
          sx={{ cursor: "pointer" }}
          color={theme.palette.secondary.main}
          onClick={() => push("/register")}
        >
          <Typography>{"Sign Up"}</Typography>
        </MUILink>
      </Box>
    </Box>
  );
};

export default LoginPageLayout;
