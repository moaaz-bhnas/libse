import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import List from "../../components/bottom/List";
import useTranslation from "../../hooks/useTranslation";
import getDirection from "../../utils/helpers/getDirection";
import { containerStyles, mediaQueries, offScreen } from "../../utils/style";

const StyledBottom = styled.nav`
  display: none;

  @media screen and (max-width: ${mediaQueries.header}) {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid ${({ theme }) => theme.bg.grey2};
    display: block;
  }
`;

const Title = styled.h2`
  ${offScreen}
`;

const Container = styled.div`
  ${containerStyles}
`;

const Bottom = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledBottom>
      <Title dir={getDirection(locale)}>{t("appNav")}</Title>

      <Container>
        <List />
      </Container>
    </StyledBottom>
  );
};

export default memo(Bottom);
