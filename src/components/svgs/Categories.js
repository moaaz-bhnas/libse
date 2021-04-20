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
      viewBox="-50 -50 1055.399 1055.399"
      style={style}
    >
      <Path
        d="M467.164,955.399c239.5,0,436.8-180.199,463.9-412.399c-6.801,1.1-13.699,1.7-20.699,1.7H520.663
		c-14.799,0-29.199-2.9-42.799-8.7c-13.101-5.5-24.9-13.5-34.9-23.5c-10.1-10.101-18-21.8-23.5-34.9c-5.8-13.6-8.7-28-8.7-42.8V45
		c0-7,0.601-13.9,1.7-20.7c-232.2,27.2-412.4,224.5-412.4,464C0.063,746.3,209.164,955.399,467.164,955.399z"
      />
      <Path
        d="M520.663,464.8h389.701c8.398,0,16.199-2.3,22.898-6.3c14.602-8.7,23.801-25.3,21.801-43.601
		c-23-218.1-196.4-391.5-414.5-414.6c-1.6-0.2-3.199-0.3-4.801-0.3c-16.299,0-30.799,8.8-38.699,22.1c-4,6.7-6.301,14.5-6.301,22.9
		v389.7C490.663,451.3,504.163,464.8,520.663,464.8z"
      />
    </Svg>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default memo(Categories);
