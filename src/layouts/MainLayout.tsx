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
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Credential from "../components/Credential";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useRoleBaseAuth from "@src/hooks/useRoleBaseAuth";
import { UserRoleMap } from "@src/types/user-types";
function MainLayoutContent({ children }: React.PropsWithChildren) {
  const { push } = useRouter();
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
          position="fixed"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
              onClick={() => setIsOpened(!isOpened)}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Bünyamin ERDAL
            </Typography>
          </Toolbar>
        </AppBar>
      </Stack>
      <Grid container flexDirection={{ xs: "row", sm: "row" }}>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Stack
            sx={{
              height: { xs: "auto", sm: "100vh" },
              overflow: "auto",
              display: { xs: isOpened ? "flex" : "none", sm: "flex" },
              justifyContent: "space-between",
              borderRight: `1px solid ${theme.palette.primary.light}`,
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
                  >
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Amin Panel" />
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
          xs={12}
          sm={8}
          md={9}
          lg={10}
          sx={{
            height: {
              xs: isOpened ? "calc(100vh - 407px)" : "calc(100vh - 56px)",
              sm: "100vh",
            },
            overflow: "auto",
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
