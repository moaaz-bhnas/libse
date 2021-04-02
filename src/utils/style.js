import { css } from "styled-components";

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
