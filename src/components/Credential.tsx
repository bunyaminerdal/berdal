import { Box, Typography } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Credential = () => {
  const session = useSession();
  console.log("🚀 ~ file: Credential.tsx:8 ~ Credential ~ session:", session);

  return (
    <>
      {session.data ? (
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
              {session.data.user?.name}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            color="text.primary"
            onClick={() => signOut()}
          >
            {"Sign Out"}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            align: "center",
            display: "flex",
            justifyContent: "space-around",
            margin: "15px",
          }}
        >
          <Link href="/login">
            <Typography variant="body2" color="text.primary">
              Sign In
            </Typography>
          </Link>
          <Link href="/register">
            <Typography variant="body2" color="text.primary">
              Sign Up
            </Typography>
          </Link>
        </Box>
      )}
    </>
  );
};

export default Credential;
