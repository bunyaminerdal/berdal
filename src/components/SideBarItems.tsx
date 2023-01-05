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
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

const SideBarItems = () => {
  const { push } = useRouter();
  return (
    <>
      <Stack
        justifyContent="center"
        display="flex"
        alignContent="center"
        alignItems="center"
        gap="10px"
        padding="40px 10px 10px 10px"
      >
        <Avatar
          alt="Bunyamin Erdal"
          src="/images/avatar.jpg"
          sx={{ width: 130, height: 130 }}
        />
        <Typography>Bünyamin ERDAL</Typography>
        <Box justifyContent="space-around" display="flex" width="250px">
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
      <ListItemButton onClick={() => push("/")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={() => push("/about")}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About me" />
      </ListItemButton>
      <ListItemButton onClick={() => push("/blog")}>
        <ListItemIcon>
          <NewspaperIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
      <ListItemButton onClick={() => push("/projects")}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <ListItemButton onClick={() => push("/contact")}>
        <ListItemIcon>
          <ConnectWithoutContactIcon />
        </ListItemIcon>
        <ListItemText primary="Contact me" />
      </ListItemButton>
    </>
  );
};

export default SideBarItems;
