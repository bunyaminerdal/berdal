import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link as MUILink } from "@mui/material";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ContactForm from "./ContactForm";

const ContactPageContent = () => {
  const { data, status } = useSession();
  const theme = useTheme();
  const {
    push,
    query: { message },
  } = useRouter();
  const isSuccess = message?.toString() === "success";
  return (
    <>
      {!isSuccess ? (
        <Box
          width="100%"
          height="100%"
          gap="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="5px"
        >
          <Typography variant="h4">{"Contact me"}</Typography>
          <Typography>{"Don't hesitate to get in touch with me. "}</Typography>
          {(!data?.user || status !== "authenticated") && (
            <>
              <Box sx={{ display: "flex", gap: "5px", minWidth: "375px" }}>
                <Typography flex="1">
                  {"it's easier for me to recognize people when they "}
                </Typography>
                <MUILink
                  flex="0"
                  sx={{ cursor: "pointer" }}
                  color={theme.palette.secondary.main}
                  onClick={() => push("/login?callbackUrl=/contact")}
                >
                  <Typography width="60px">{"Sign In"}</Typography>
                </MUILink>
              </Box>
              <Typography>
                {"Or you can just continue with the form below?"}
              </Typography>
            </>
          )}

          <ContactForm />
        </Box>
      ) : (
        <Box
          width="100%"
          height="100%"
          gap="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h4">
            {"Your Message Sended Successfully!"}
          </Typography>
          <Typography>{"I will respond asap. "}</Typography>
          <MUILink
            sx={{ cursor: "pointer" }}
            color={theme.palette.secondary.main}
            onClick={() => push("/")}
          >
            <Typography>{"Go to Home"}</Typography>
          </MUILink>
        </Box>
      )}
    </>
  );
};

export default ContactPageContent;
