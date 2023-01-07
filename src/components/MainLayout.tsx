import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SideBarItems from "./SideBarItems";
import ThemeChangeButton from "./ThemeChangeButton";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const drawerWidth = "380px";

function DashboardContent({ children }: React.PropsWithChildren) {
  const theme = useTheme();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Box sx={{ height: "100vh", minWidth: "365px" }}>
      <Box sx={{ flexGrow: 1 }} position="sticky" top="0">
        <AppBar
          position="static"
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
      </Box>
      <Box
        sx={{
          height: { sm: "100vh" },
          display: { xs: "flow", sm: "flex" },
        }}
      >
        <Box
          position="sticky"
          top="60px"
          sx={{
            width: { md: drawerWidth },
            borderRight: `1px solid ${theme.palette.primary.light}`,
            justifyContent: "space-between",
            flexDirection: "column",
            display: { xs: isOpened ? "flex" : "none", sm: "flex" },
            height: "100%",
            zIndex: 1000,
            backgroundColor: `${theme.palette.background.default}`,
          }}
        >
          <Box>
            <SideBarItems />
          </Box>
          <Box>
            <Divider />
            <ThemeChangeButton />
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{ height: "100%", width: "100%", mt: { xs: "30px", sm: "0" } }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default function Dashboard({ children }: React.PropsWithChildren) {
  return <DashboardContent>{children}</DashboardContent>;
}
