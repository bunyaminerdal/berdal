import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Slide } from "@mui/material";
import Head from "next/head";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { useCustomTheme } from "../src/useTheme";
import { createContext, useEffect, useMemo, useState } from "react";
import { AppProps } from "next/app";
import MainLayout from "../src/components/MainLayout";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;
  const [mode, setMode] = useState<PaletteMode>("dark");
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
          <SnackbarProvider maxSnack={3}>
            <SessionProvider session={session}>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </SessionProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
