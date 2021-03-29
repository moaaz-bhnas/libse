import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  text: {
    default: "#333",
  },
  bg: {
    header: "#fff",
  },
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
