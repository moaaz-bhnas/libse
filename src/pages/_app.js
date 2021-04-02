import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #333;
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
    default: "#faf9f7",
    header: "#fff",
  },
  border: {},
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
