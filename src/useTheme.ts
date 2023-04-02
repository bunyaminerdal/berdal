import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const useCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#3C1B6D",
      },
      secondary: {
        main: "#1B5E6D",
        light: "rgba(30, 100, 137, .3)",
      },
      divider: "#3C1B6D",
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
            "&:hover": {
              color: "#3C1B6D",
            },
            background: "linear-gradient(45deg, #1B5E6D 30%, #3C1B6D 90%)",
            border: 0,
            boxShadow: "0px 2px 4px 1px rgba(30, 100, 137, .3)",
            color: "white",
            padding: "5px",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              background: "rgba(30, 100, 137, .2)",
              borderLeft: "3px solid #1B5E6D",
              textDecoration: "underline",
            },
            "&:hover": {
              borderLeft: "5px solid #1B5E6D",
              color: "#1B5E6D",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            background:
              "linear-gradient(45deg, rgba(30, 100, 137, .2) 30%, rgba(60, 27, 109, 0.2) 90%)",
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
