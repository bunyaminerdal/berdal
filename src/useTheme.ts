import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const useCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#4B516F",
      },
      secondary: {
        main: "#4B9EFE",
      },
    },
  });
};
