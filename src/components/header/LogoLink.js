import { memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../logo/Logo";

const StyledLink = styled.a`
  margin-right: 1em;
`;

const LogoLink = () => {
  const { locale } = useRouter();

  return (
    <Link href="/" passHref>
      <StyledLink>
        <Logo />
      </StyledLink>
    </Link>
  );
};

export default memo(LogoLink);
