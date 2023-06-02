import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SideBarItems from "../components/SideBarItems";
import ThemeChangeButton from "../components/ThemeChangeButton";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Grid,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/icons-material/Menu";
import Credential from "../components/Credential";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useRoleBaseAuth from "@src/hooks/useRoleBaseAuth";
import { UserRoleMap } from "@src/types/user-types";
import { SideBarItemMap, isActiveSideBarButton } from "@src/utils/helpers";
function MainLayoutContent({ children }: React.PropsWithChildren) {
  const { push, pathname } = useRouter();
  const { data } = useSession();
  const { isHaveAccessRight } = useRoleBaseAuth(
    UserRoleMap.ADMIN,
    data?.user?.role
  );
  const theme = useTheme();
  const [isOpened, setIsOpened] = useState(false);
  const closeAppBar = () => {
    setIsOpened(false);
  };
  return (
    <Box
      height="100vh"
      overflow="hidden"
      sx={{ display: "flex", flexDirection: "column", minWidth: "370px" }}
      position="relative"
    >
      <Box
        sx={{
          height: { xs: "56px", md: "0" },
          display: { xs: "block", md: "none" },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: `${theme.palette.primary.main}`,
            height: { xs: "56px", md: "0" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}
          >
            Bünyamin ERDAL
          </Typography>
          <IconButton
            size="large"
            edge="start"
            sx={{ ml: 2, background: "transparent" }}
            onClick={() => setIsOpened(!isOpened)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundColor: `${theme.palette.background.paper}`,
            width: { xs: "100%", md: "350px" },
            position: { xs: "absolute", md: "initial" },
            top: "56px",
            left: "0",
            right: "0",
            bottom: "0",
            display: { xs: `${isOpened ? "flex" : "none"}`, md: "flex" },
            flexDirection: "column",
            borderRight: {
              xs: "none",
              md: `1px solid ${theme.palette.primary.main}`,
            },
            zIndex: "10",
          }}
        >
          <Box sx={{ flex: "1" }}>
            <SideBarItems closeAppBar={closeAppBar} />
          </Box>
          <Box sx={{ flex: "0" }}>
            {!data || !isHaveAccessRight ? null : (
              <>
                <Divider />
                <ListItemButton
                  onClick={() => {
                    closeAppBar();
                    push("/admin");
                  }}
                  selected={isActiveSideBarButton(
                    pathname,
                    SideBarItemMap.admin
                  )}
                >
                  <Avatar>
                    <AdminPanelSettingsIcon />
                  </Avatar>
                  <ListItemText
                    sx={{ marginLeft: "15px" }}
                    primary="Admin Panel"
                  />
                </ListItemButton>
              </>
            )}
            <Divider />
            <Credential closeAppBar={closeAppBar} />
            <Divider />
            <ThemeChangeButton />
            <Divider />
          </Box>
        </Box>
        <Box sx={{ width: "250px", flex: "1" }}>{children}</Box>
      </Box>
    </Box>
  );
}

export default function MainLayout({ children }: React.PropsWithChildren) {
  return <MainLayoutContent>{children}</MainLayoutContent>;
}

// <Grid container flexDirection={{ xs: "row", sm: "row" }}>
//   <Grid
//     item
//     sx={{
//       width: { xs: "100%", sm: "250px", md: "300px" },
//     }}
//   >
//     <Stack
//       sx={{
//         height: { xs: "100%", sm: "100vh" },
//         overflow: "auto",
//         display: { xs: isOpened ? "flex" : "none", sm: "flex" },
//         justifyContent: "space-between",
//         borderRight: `1px solid ${theme.palette.primary.main}`,
//       }}
//     >

//     </Stack>
//   </Grid>
//   <Grid
//     item
//     sx={{
//       display: { xs: isOpened ? "none" : "block", sm: "block" },
//       height: {
//         xs: "100%",
//         sm: "100vh",
//       },
//       overflow: "auto",
//       width: {
//         xs: "100%",
//         sm: "calc(100vw - 250px)",
//         md: "calc(100vw - 300px)",
//       },
//     }}
//   >

//   </Grid>
// </Grid>;
