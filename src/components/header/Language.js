import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import { DefaultButton } from "../button/Button";
import { mediaQueries } from "../../utils/style";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: ${mediaQueries.header}) {
    display: none;
  }
`;

const Language = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { t } = useTranslation(locale);

  const handleClick = useCallback(() => {
    router.push(pathname, pathname, { locale: locale === "ar" ? "en" : "ar" });
  }, [locale]);

  return (
    <Container>
      <DefaultButton onClick={handleClick}>{t("language")}</DefaultButton>
    </Container>
  );
};

export default memo(Language);
