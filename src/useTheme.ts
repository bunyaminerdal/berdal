import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const useCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#1B5E6D",
      },
      secondary: {
        main: "#3C1B6D",
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #1B5E6D 30%, #3C1B6D 90%)",
            border: 0,
            borderRadius: 5,
            boxShadow: "0px 2px 4px 1px rgba(30, 100, 137, .3)",
            color: "white",
            height: 48,
            padding: "0 30px",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #1B5E6D 30%, #3C1B6D 90%)",
            border: 0,
            boxShadow: "0px 2px 4px 1px rgba(30, 100, 137, .3)",
            color: "white",
            padding: "5px",
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#3C1B6D",
            padding: "5px",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              background: "rgba(30, 100, 137, .2)",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #1B5E6D 30%, #3C1B6D 90%)",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #1B5E6D 30%, #3C1B6D 90%)",
            boxShadow: "0px 2px 4px 1px rgba(30, 100, 137, .3)",
            color: "white",
          },
        },
      },
    },
  });
};
