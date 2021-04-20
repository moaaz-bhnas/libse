import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import List from "../../components/categories/List";
import { containerStyles, mediaQueries, offScreen } from "../../utils/style";
import useTranslation from "../../hooks/useTranslation";

const StyledCategories = styled.nav`
  background-color: ${({ theme }) => theme.bg.grey2};

  @media screen and (max-width: ${mediaQueries.header}) {
    display: none;
  }
`;

const Title = styled.h2`
  ${offScreen}
`;

const Container = styled.div`
  ${containerStyles}
`;

const Categories = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledCategories>
      <Title>{t("categories")}</Title>
      <Container>
        <List />
      </Container>
    </StyledCategories>
  );
};

export default memo(Categories);
