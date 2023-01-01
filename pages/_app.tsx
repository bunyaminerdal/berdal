import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { useCustomTheme } from "../src/useTheme";
import ThemeChangeButton from "../src/components/ThemeChangeButton";
import { createContext, useEffect, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function MyApp() {
  return <ThemeChangeButton iconOnly={false} />;
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function ToggleColorMode() {
  const [mode, setMode] = useState<PaletteMode>("light");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localMode = sessionStorage.getItem("mode");
      if (localMode) {
        setMode(localMode as PaletteMode);
      } else {
        sessionStorage.setItem("mode", mode);
      }
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        sessionStorage.setItem("mode", "");
      },
    }),
    []
  );

  const theme = useCustomTheme(mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MyApp />
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
