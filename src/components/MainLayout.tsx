import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SideBarItems from "./SideBarItems";
import ThemeChangeButton from "./ThemeChangeButton";
import { useTheme } from "@mui/material/styles";

const drawerWidth = "380px";

function DashboardContent({ children }: React.PropsWithChildren) {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh" }}>
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
