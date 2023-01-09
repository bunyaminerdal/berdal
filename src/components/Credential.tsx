import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Credential = () => {
  return (
    <Box
      sx={{
        align: "center",
        display: "flex",
        justifyContent: "space-around",
        margin: "15px",
      }}
    >
      <Link href="/">
        <Typography variant="body2" color="text.primary">
          Sign In
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body2" color="text.primary">
          Sign Up
        </Typography>
      </Link>
    </Box>
  );
};

export default Credential;
