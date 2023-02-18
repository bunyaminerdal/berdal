import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Credential = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: Credential.tsx:7 ~ Credential ~ session", session);
  console.log("🚀 ~ file: Credential.tsx:7 ~ Credential ~ session", session);

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
        <Link href="#" onClick={() => signIn()}>
          <Typography variant="body2" color="text.primary">
            Sign In
          </Typography>
        </Link>
      ) : (
        <>
          <Typography variant="body2" color="text.primary">
            {session.user?.name}
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
