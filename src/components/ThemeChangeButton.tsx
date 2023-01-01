import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../pages/_app";

const ThemeChangeButton = ({ iconOnly = false }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Button
        onClick={colorMode.toggleColorMode}
        color="inherit"
        variant="text"
      >
        {!iconOnly ? <Box sx={{ p: 1 }}>{theme.palette.mode} mode </Box> : null}
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </Button>
    </Box>
  );
};

export default ThemeChangeButton;
