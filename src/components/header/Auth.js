import { memo } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import styled from "styled-components";
import Link from "next/link";
import { linkStyles, mediaQueries } from "../../utils/style";

const StyledAuth = styled.p`
  margin: 0;
  margin-right: 1em;
  flex-shrink: 0;

  @media screen and (max-width: ${mediaQueries.menu}) {
    display: none;
  }
`;

const StyledLink = styled.a`
  ${linkStyles}
  padding: .85em 0;
`;

const Auth = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledAuth>
      <Link passHref href="/login">
        <StyledLink>{t("login")}</StyledLink>
      </Link>{" "}
      {t("or")}{" "}
      <Link passHref href="/signup">
        <StyledLink>{t("createAccount")}</StyledLink>
      </Link>
    </StyledAuth>
  );
};

export default memo(Auth);
