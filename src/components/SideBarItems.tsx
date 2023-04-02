import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FolderIcon from "@mui/icons-material/Folder";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { SideBarItemMap, isActiveSideBarButton } from "@src/utils/helpers";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material";

const SideBarItems = ({ closeAppBar }: { closeAppBar: () => void }) => {
  const { push, pathname } = useRouter();
  const theme = useTheme();
  return (
    <>
      <Stack
        justifyContent="center"
        display="flex"
        alignContent="center"
        alignItems="center"
        gap="10px"
        padding="10px 10px 10px 10px"
      >
        <Box
          sx={{
            borderRadius: "60px",
            overflow: "hidden",
            width: "120px",
            height: "120px",
            display: { xs: "none", sm: "block" },
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: `1px 3px 5px 5px ${theme.palette.secondary.light}`,
          }}
        >
          <Image
            alt="Bunyamin Erdal"
            src="/images/avatar.jpg"
            width={120}
            height={130}
            placeholder="empty"
          />
        </Box>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Bünyamin ERDAL
        </Typography>
        <Box justifyContent="space-around" display="flex" columnGap="5px">
          <IconButton onClick={() => push("https://github.com/bunyaminerdal")}>
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              push("https://www.linkedin.com/in/b%C3%BCnyamin-erdal-18736345/")
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton onClick={() => push("https://twitter.com/bunyaminerdal")}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            onClick={() => push("https://www.instagram.com/bunyaminerdal/")}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.home)}
      >
        <Avatar>
          <HomeIcon />
        </Avatar>
        <ListItemText sx={{ marginLeft: "15px" }} primary="Home" />
      </ListItemButton>
      <Divider />
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/projects");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.projects)}
      >
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText sx={{ marginLeft: "15px" }} primary="Projects" />
      </ListItemButton>
      <Divider />

      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/contact");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.contact)}
      >
        <Avatar>
          <ConnectWithoutContactIcon />
        </Avatar>
        <ListItemText sx={{ marginLeft: "15px" }} primary="Contact me" />
      </ListItemButton>
      <Divider />
    </>
  );
};

export default SideBarItems;
