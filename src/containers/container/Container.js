import { memo } from "react";
import styled from "styled-components";
import { sizes } from "../../utils/style";

const StyledContainer = styled.div`
  max-width: ${sizes.maxWidth.default};
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default memo(Container);
