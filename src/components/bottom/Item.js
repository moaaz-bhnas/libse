import { memo } from "react";
import styled from "styled-components";

const StyledItem = styled.li``;

const Item = () => {
  return <StyledItem>Enter</StyledItem>;
};

export default memo(Item);
