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
    <Box height="100vh" overflow="hidden">
      <Stack sx={{ height: { xs: "56px", sm: "0" } }}>
        <AppBar
          enableColorOnDark
          position="fixed"
          sx={{
            display: { xs: "block", sm: "none" },
            transition: "all",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
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
        </AppBar>
      </Stack>
      <Grid container flexDirection={{ xs: "row", sm: "row" }}>
        <Grid
          item
          sx={{
            width: { xs: "100%", sm: "250px", md: "300px" },
          }}
        >
          <Stack
            sx={{
              height: { xs: "90vh", sm: "100vh" },
              overflow: "auto",
              display: { xs: isOpened ? "flex" : "none", sm: "flex" },
              justifyContent: "space-between",
              borderRight: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box>
              <SideBarItems closeAppBar={closeAppBar} />
            </Box>
            <Box>
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
          </Stack>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: isOpened ? "none" : "block", sm: "block" },
            height: {
              xs: "100%",
              sm: "100vh",
            },
            overflow: "auto",
            width: {
              xs: "100%",
              sm: "calc(100vw - 250px)",
              md: "calc(100vw - 300px)",
            },
          }}
        >
          <Box padding="10px">{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function MainLayout({ children }: React.PropsWithChildren) {
  return <MainLayoutContent>{children}</MainLayoutContent>;
}
