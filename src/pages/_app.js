import { useRouter } from "next/router";
import {
  createGlobalStyle,
  ThemeProvider,
  StyleSheetManager,
} from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";
import getDirection from "../utils/helpers/getDirection";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #333;
    background-color: #faf9f7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  text: {
    default: "#333",
    brand: "#1f70e6",
    grey: "#737373",
  },
  bg: {
    default: "#F0F2F5",
    header: "#fff",
  },
  border: {},
  icon: {
    default: "#606266",
  },
};

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
