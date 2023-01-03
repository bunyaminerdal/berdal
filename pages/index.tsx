import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import bg from "../public/images/33.jpg";
import { useTheme } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import CopyRight from "../src/components/CopyRight";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexGrow: "1",
        minWidth: "400px",
      }}
    >
      <Box
        color={`${theme.palette.primary.main}`}
        width="100%"
        height="100%"
        gap="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "conter",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Bunyamin Erdal"
            src="/images/avatar.jpg"
            sx={{ width: 250, height: 250 }}
          />
          <Box
            margin="50px 0 10px 0"
            padding="10px"
            borderBottom="1px solid black"
          >
            <Typography variant="h4">I&apos;m a Front-end Developer</Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-around"
            width="400px"
            margin="10px"
          >
            <Image alt="react" src="/html5.svg" width="36" height="36" />
            <Image alt="react" src="/css3.svg" width="36" height="36" />
            <Image alt="react" src="/react.svg" width="36" height="36" />
            <Image alt="react" src="/next.svg" width="124" height="36" />
            <Image alt="react" src="/javascript.svg" width="36" height="36" />
            <Image alt="react" src="/typescript.svg" width="36" height="36" />
          </Box>
          <Box marginTop="100px">
            <CopyRight />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
