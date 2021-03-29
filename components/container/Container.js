import { memo } from "react";
import styled from "styled-components";
import sizes from "../../data/sizes";

const StyledContainer = styled.div`
  max-width: ${sizes.maxWidth.default};
  margin-left: auto;
  margin-right: auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default memo(Container);
