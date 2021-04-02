import { memo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { linkStyles } from "../../utils/style";

const StyledAuth = styled.p``;

const StyledLink = styled.a`
  ${linkStyles}
`;

const Auth = () => {
  return (
    <StyledAuth>
      <Link passHref href="/login">
        <StyledLink>Log in</StyledLink>
      </Link>{" "}
      or{" "}
      <Link passHref href="/signup">
        <StyledLink>Create account</StyledLink>
      </Link>
    </StyledAuth>
  );
};

export default memo(Auth);
