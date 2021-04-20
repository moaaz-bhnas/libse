import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Svg = styled.svg``;

const Path = styled.path``;

const Categories = ({ title = "categories", className = "svg", style }) => {
  return (
    <Svg
      title={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -52 512 512"
      style={style}
    >
      <Path d="m0 0h113.292969v113.292969h-113.292969zm0 0" />
      <Path d="m149.296875 0h362.703125v113.292969h-362.703125zm0 0" />
      <Path d="m0 147.007812h113.292969v113.292969h-113.292969zm0 0" />
      <Path d="m149.296875 147.007812h362.703125v113.292969h-362.703125zm0 0" />
      <Path d="m0 294.011719h113.292969v113.296875h-113.292969zm0 0" />
      <Path d="m149.296875 294.011719h362.703125v113.296875h-362.703125zm0 0" />
    </Svg>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default memo(Categories);
