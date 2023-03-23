import { Box, Typography, Link as MUILink, Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext, useEffect } from "react";
import { spinnerContext } from "./SpinnerProvider";
const Credential = () => {
  const { push } = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const setSpin = useContext(spinnerContext);
  useEffect(() => {
    setSpin && setSpin(session.status === "loading");
  }, [session.status, setSpin]);

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
            onClick={() => {
              signOut();
              enqueueSnackbar("Sign out Successfully!", { variant: "success" });
            }}
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
