import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FolderIcon from "@mui/icons-material/Folder";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { SideBarItemMap, isActiveSideBarButton } from "@src/utils/helpers";

const SideBarItems = ({ closeAppBar }: { closeAppBar: () => void }) => {
  const { push, pathname } = useRouter();
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
        <Box justifyContent="space-around" display="flex">
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
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/about");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.about)}
      >
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About me" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/blog");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.blog)}
      >
        <ListItemIcon>
          <NewspaperIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/projects");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.projects)}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          closeAppBar();
          push("/contact");
        }}
        selected={isActiveSideBarButton(pathname, SideBarItemMap.contact)}
      >
        <ListItemIcon>
          <ConnectWithoutContactIcon />
        </ListItemIcon>
        <ListItemText primary="Contact me" />
      </ListItemButton>
    </>
  );
};

export default SideBarItems;
