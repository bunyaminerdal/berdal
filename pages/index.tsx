import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import CopyRight from "../src/components/CopyRight";

const Home = () => {
  return (
    <Box
      width="100%"
      sx={{
        height: { xs: "calc(100dvh - 56px)", md: "100%" },
        overflow: "auto",
        justifyContent: { xs: "flex-start", md: "center" },
      }}
      gap="10px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding="20px 5px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "125px",
            overflow: "hidden",
            width: "250px",
            height: "250px",
            border: "2px solid #3C1B6D",
            boxShadow: "1px 3px 7px 7px rgba(30, 100, 137, .3)",
          }}
        >
          <Image
            alt="Bunyamin Erdal"
            src="/images/avatar.jpg"
            width={250}
            height={280}
            placeholder="empty"
          />
        </Box>
        <Box
          margin="50px 0 10px 0"
          padding="10px"
          borderBottom="1px solid #3C1B6D"
        >
          <Typography color="text.primary" variant="h4">
            <Box sx={{ textAlign: "center" }}>
              I&apos;m a Front-end Developer
            </Box>
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          margin="10px"
          gap="5px"
        >
          <Image
            placeholder="empty"
            alt="react"
            src="/html5.svg"
            width="36"
            height="36"
          />
          <Image
            placeholder="empty"
            alt="react"
            src="/css3.svg"
            width="36"
            height="36"
          />
          <Image
            placeholder="empty"
            alt="react"
            src="/react.svg"
            width="36"
            height="36"
          />
          <Image
            placeholder="empty"
            alt="react"
            src="/next.svg"
            width="124"
            height="36"
          />
          <Image
            placeholder="empty"
            alt="react"
            src="/javascript.svg"
            width="36"
            height="36"
          />
          <Image
            placeholder="empty"
            alt="react"
            src="/typescript.svg"
            width="36"
            height="36"
          />
        </Box>
        <Box marginTop="100px">
          <CopyRight />
        </Box>
      </Box>
    </Box>
  );
};
Home.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};
export default Home;
