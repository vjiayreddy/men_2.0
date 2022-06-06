import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/config/apollo/index";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextRouter, useRouter } from "next/router";
import createEmotionCache from "../src/config/emotions";
import { CacheProvider } from "@emotion/react";
import theme from "../src/config/theme";
import "../styles/globals.scss";
import AppLayoutComponent from "../src/components/Layouts/AppLayout/AppLayout";
import useNetworkStatus from "../src/utils/useNetworkStatus";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ROUTES } from "../src/config/routes/routes";
import { SessionProvider } from "next-auth/react";
const clientSideEmotionCache = createEmotionCache();
function MyApp(props) {
  const { networkStatus } = useNetworkStatus();
  const router: NextRouter = useRouter();
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    session,
  } = props;
  const appProps = {
    ...pageProps,
    networkStatus,
    router,
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Men2.0</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* {networkStatus === false && (
          <Snackbar autoHideDuration={300} open={true}>
            <MuiAlert
              onClose={()=>{}}
              severity="error"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </MuiAlert>
          </Snackbar>
        )} */}
        <SessionProvider session={session}>
          <ApolloProvider client={apolloClient}>
            {ROUTES.LOGIN === router.pathname ||
            ROUTES.SIGNUP === router.pathname ? (
              <Component {...appProps} />
            ) : (
              <AppLayoutComponent>
                <Component {...appProps} />
              </AppLayoutComponent>
            )}
          </ApolloProvider>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
