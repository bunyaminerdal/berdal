import { ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline, IconButton, Slide } from "@mui/material";
import Head from "next/head";
import createEmotionCache from "@src/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { useCustomTheme } from "@src/useTheme";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AppProps } from "next/app";
import MainLayout from "@src/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider, closeSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import SpinnerProvider from "@components/SpinnerProvider";
import Auth from "@src/utils/Auth";
import { NextComponentType, NextPageContext } from "next";
import { AuthEnabledComponentConfig } from "@src/types/auth.utils";

type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> &
  Partial<AuthEnabledComponentConfig>;
const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
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
        <title>Bünyamin ERDAL</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SpinnerProvider>
            <SnackbarProvider
              anchorOrigin={{ horizontal: "center", vertical: "top" }}
              TransitionProps={{ direction: "right" }}
              maxSnack={3}
              action={(snackbarId) => (
                <IconButton
                  sx={{ background: "transparent" }}
                  onClick={() => closeSnackbar(snackbarId)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            >
              <SessionProvider session={session}>
                {(Component as NextComponentWithAuth)?.auth?.needAuth ? (
                  <MainLayout>
                    <Auth auth={(Component as NextComponentWithAuth)?.auth}>
                      <Component {...pageProps} />
                    </Auth>
                  </MainLayout>
                ) : (
                  <MainLayout>
                    <Component {...pageProps} />
                  </MainLayout>
                )}
              </SessionProvider>
            </SnackbarProvider>
          </SpinnerProvider>
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
