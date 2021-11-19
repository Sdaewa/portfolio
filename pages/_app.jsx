import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  MuiThemeProvider,
  useMediaQuery,
  CssBaseline,
} from "@material-ui/core";
import { darkTheme, lightTheme } from "../src/theme";

export default function MyApp({ Component, pageProps }) {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [theme, setTheme] = useState(prefersLightMode ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(prefersLightMode ? darkTheme : lightTheme);
  }, [prefersLightMode]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Luis Ramirez</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} setTheme={setTheme} />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
