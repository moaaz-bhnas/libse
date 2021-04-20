import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../logo/Logo";
import { mediaQueries } from "../../utils/style";

const StyledLink = styled.a`
  margin-right: 0.5em;

  @media screen and (max-width: ${mediaQueries.search}) {
    margin-right: 0; // the margin ain't necessary anymore as the dropdown won't display besides the logo
  }

  @media screen and (max-width: ${mediaQueries.header}) {
    position: absolute;
  }
`;

const LogoLink = () => {
  return (
    <Link href="/" passHref>
      <StyledLink>
        <Logo />
      </StyledLink>
    </Link>
  );
};

export default memo(LogoLink);
