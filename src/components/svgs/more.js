import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Svg = styled.svg``;

const Circle = styled.circle``;

const More = ({ title = "more", className = "svg", style }) => {
  return (
    <Svg
      title={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -50 526.667 526.667"
      style={style}
    >
      <Circle cx="42.667" cy="213.333" r="42.667" />
      <Circle cx="213.333" cy="213.333" r="42.667" />
      <Circle cx="384" cy="213.333" r="42.667" />
    </Svg>
  );
};

More.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default memo(More);
