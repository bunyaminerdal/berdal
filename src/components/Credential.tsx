import {
  Box,
  Typography,
  Link as MUILink,
  ListItemButton,
  Skeleton,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const Credential = ({ closeAppBar }: { closeAppBar: () => void }) => {
  const { push } = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();

  if (session.status === "loading")
    return (
      <Box
        sx={{
          align: "center",
          display: "flex",
          justifyContent: "space-around",
          margin: "15px",
        }}
      >
        <Skeleton variant="text" height="20px" width="55px" />
        <Skeleton variant="text" height="20px" width="55px" />
      </Box>
    );
  return (
    <>
      {session.data ? (
        <Box
          sx={{
            align: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center", maxWidth: "50%" }}
          >
            <Typography variant="body2" color="text.primary">
              {session.data.user?.name}
            </Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center", maxWidth: "50%" }}
            onClick={() => {
              closeAppBar();
              signOut();
              enqueueSnackbar("Sign out Successfully!", { variant: "success" });
            }}
          >
            <Typography variant="body2">{"Sign Out"}</Typography>
          </ListItemButton>
        </Box>
      ) : (
        <Box
          sx={{
            align: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center", maxWidth: "50%" }}
            onClick={() => {
              closeAppBar();
              push("/login");
            }}
          >
            <Typography variant="body2">{"Sign In"}</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center", maxWidth: "50%" }}
            onClick={() => {
              closeAppBar();
              push("/register");
            }}
          >
            <Typography variant="body2">{"Sign Up"}</Typography>
          </ListItemButton>
        </Box>
      )}
    </>
  );
};

export default Credential;
