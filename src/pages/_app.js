import { useRouter } from "next/router";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";
import getDirection from "../utils/helpers/getDirection";
import { GlobalStyle, theme } from "../utils/style";

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <>
      <GlobalStyle />
      <StyleSheetManager
        stylisPlugins={getDirection(locale) === "rtl" ? [stylisRTLPlugin] : []}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
}
