import { Box, Typography, Link as MUILink, useTheme } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Credential = () => {
  const theme = useTheme();
  const { push } = useRouter();
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
          <Typography variant="body2" color="text.primary">
            {session.data.user?.name}
          </Typography>
          <MUILink
            sx={{ cursor: "pointer" }}
            color="inherit"
            onClick={() => signOut()}
          >
            <Typography variant="body2">{"Sign Out"}</Typography>
          </MUILink>
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
          <MUILink
            sx={{ cursor: "pointer" }}
            color="inherit"
            onClick={() => push("/login")}
          >
            <Typography variant="body2">{"Sign In"}</Typography>
          </MUILink>
          <MUILink
            sx={{ cursor: "pointer" }}
            color="inherit"
            onClick={() => push("/register")}
          >
            <Typography variant="body2">{"Sign Up"}</Typography>
          </MUILink>
        </Box>
      )}
    </>
  );
};

export default Credential;
