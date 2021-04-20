import { memo } from "react";
import styled from "styled-components";
import { CircleButton } from "../button/Button";
import HeartIcon from "../svgs/Heart";

const Button = () => {
  return (
    <CircleButton aria-label="Add to favorites">
      <HeartIcon className="favorites__svg" />
    </CircleButton>
  );
};

export default memo(Button);
