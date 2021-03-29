import { memo } from "react";
import styled from "styled-components";
import fonts from "../../data/fonts";

const StyledLogo = styled.span`
  font-size: 2rem;
  font-family: ${fonts.sansSerif};
  font-weight: 500;
`;

const Logo = () => {
  return <StyledLogo>Libse</StyledLogo>;
};

export default memo(Logo);
