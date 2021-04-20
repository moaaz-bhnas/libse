import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import List from "../../components/bottom/List";
import useTranslation from "../../hooks/useTranslation";
import { containerStyles, offScreen } from "../../utils/style";

const StyledBottom = styled.nav`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid ${({ theme }) => theme.bg.grey2};
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
      <Title>{t("appNav")}</Title>

      <Container>
        <List />
      </Container>
    </StyledBottom>
  );
};

export default memo(Bottom);