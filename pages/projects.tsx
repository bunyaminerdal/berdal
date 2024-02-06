import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as MUILink } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{
        height: { xs: "calc(100dvh - 56px)", sm: "100%" },
        overflow: "auto",
        // justifyContent: { xs: "flex-start", sm: "center" },
      }}
      gap="10px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding="20px 10px"
    >
      <Box
        width="100%"
        // margin="50px 0 10px 0"
        padding="10px"
        borderBottom="1px solid #3C1B6D"
      >
        <Typography color="text.primary" variant="h2">
          <Box sx={{ textAlign: "center" }}>Projects</Box>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: { xs: "100%", lg: "70%" },
          borderRadius: "5px",
          backgroundColor: "rgba(200,200,200,0.1)",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: "200px" },
            borderRadius: "5px",
          }}
          image="/images/berdal.png"
          alt="berdal"
        />
        <Box
          padding="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography component="div" variant="h5">
            PERSONAL WEBSITE
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Next.js Typescript material-ui material-icons Prisma Supabase
            Postgres nextauth nodemailer notistack react-hook-form Axios
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              gap: "10px",
            }}
          >
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://github.com/bunyaminerdal/berdal"
              target="_blank"
            >
              <Typography>{"Github"}</Typography>
            </MUILink>
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://old.bunyaminerdal.dev"
              target="_blank"
            >
              <Typography>{"Visit"}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: { xs: "100%", lg: "70%" },
          borderRadius: "5px",
          backgroundColor: "rgba(200,200,200,0.1)",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: "200px" },
            borderRadius: "5px",
          }}
          image="/images/berdal-chat.png"
          alt="berdal-chat"
        />
        <Box
          padding="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography component="div" variant="h5">
            REALTIME CHAT APP
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Next.js Typescript Tailwind.css daisyUi Prisma Postgres Supabase(db
            and realtime websocket) react-icons Axios
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              gap: "10px",
            }}
          >
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://github.com/bunyaminerdal/berdal-chat"
              target="_blank"
            >
              <Typography>{"Github"}</Typography>
            </MUILink>
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://chat.bunyaminerdal.dev"
              target="_blank"
            >
              <Typography>{"Visit"}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: { xs: "100%", lg: "70%" },
          borderRadius: "5px",
          backgroundColor: "rgba(200,200,200,0.1)",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: "200px" },
            borderRadius: "5px",
          }}
          image="/images/berdal-todo.png"
          alt="berdal-todo"
        />
        <Box
          padding="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography component="div" variant="h5">
            TODO APP
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Next.js Typescript Tailwind.css Prisma Supabase Postgres react-icons
            Axios react-hook-form
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              gap: "10px",

              marginY: "auto",
            }}
          >
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://github.com/bunyaminerdal/berdal-todo-app"
              target="_blank"
            >
              <Typography>{"Github"}</Typography>
            </MUILink>
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://todo.bunyaminerdal.dev"
              target="_blank"
            >
              <Typography>{"Visit"}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
Projects.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Projects;
