import React from "react";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../pages/_app";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ThemeChangeButton = () => {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <ListItemButton onClick={colorMode.toggleColorMode}>
      <ListItemIcon>
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </ListItemIcon>
      <ListItemText primary={`${theme.palette.mode} mode `} />
    </ListItemButton>
  );
};

export default ThemeChangeButton;
