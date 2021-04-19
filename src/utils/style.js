import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #333;
    background-color: #faf9f7;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  text: {
    default: "#333",
    brand: "#1f70e6",
    grey: "#737373",
  },
  bg: {
    default: "#F0F2F5",
    header: "#fff",
    categories: "#d8dadd",
  },
  border: {},
  icon: {
    default: "#606266",
  },
};

export const fonts = {
  serif:
    "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export const sizes = {
  maxWidth: {
    default: "60em",
  },
  borderRadius: {
    default: "3em",
  },
  height: {
    header: "3.5em",
  },
};

export const mediaQueries = {
  menu: "500px",
  search: "730px",
};

export const transitions = {
  bg: {
    default: ".1s",
  },
};

export const linkStyles = css`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
`;

export const containerStyles = css`
  max-width: ${sizes.maxWidth.default};
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
`;

export const rawButton = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const rawList = css`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const rawLink = css`
  text-decoration: none;
  color: inherit;
`;

export const offScreen = css`
  position: absolute;
  left: -200rem;
`;
