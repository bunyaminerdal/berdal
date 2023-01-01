import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SideBarItems from "./SideBarItems";
import CopyRight from "./CopyRight";
import ThemeChangeButton from "./ThemeChangeButton";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const drawerWidth = "380px";
const navbarHeight: number = 64;

function DashboardContent({ children }: React.PropsWithChildren) {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh" }}>
      {/* <AppBar sx={{ height: "64px" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Bünyamin ERDAL
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box
          sx={{
            width: drawerWidth,
            height: "100%",
            borderRight: `1px solid ${theme.palette.primary.light}`,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box>
            <SideBarItems />
          </Box>
          <Box>
            <Divider />
            <ThemeChangeButton />
          </Box>
        </Box>
        <Box sx={{ height: "100%", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
}

export default function Dashboard({ children }: React.PropsWithChildren) {
  return <DashboardContent>{children}</DashboardContent>;
}
