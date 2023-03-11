import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import { getUserData } from "../services/user/userServices";
import { useEffect } from "react";

const Credential = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.accessToken)
      getUserData(session?.accessToken).then((data) =>
        console.log("user data", data)
      );
  }, [session?.accessToken]);

  return (
    <Box
      sx={{
        align: "center",
        display: "flex",
        justifyContent: "space-around",
        margin: "15px",
      }}
    >
      {!session ? (
        <>
          <Link href="#" onClick={() => signIn()}>
            <Typography variant="body2" color="text.primary">
              Sign In
            </Typography>
          </Link>
          <Link href="/sign-up">
            <Typography variant="body2" color="text.primary">
              Sign Up
            </Typography>
          </Link>
        </>
      ) : (
        <>
          <Typography variant="body2" color="text.primary">
            {session.user?.fullName}
          </Typography>
          <Link href="#" onClick={() => signOut()}>
            <Typography variant="body2" color="text.primary">
              Sign Out
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
};

export default Credential;
