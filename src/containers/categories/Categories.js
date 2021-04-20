import { memo } from "react";
import styled from "styled-components";
import List from "../../components/categories/List";
import { containerStyles, offScreen } from "../../utils/style";

const StyledCategories = styled.nav`
  background-color: ${({ theme }) => theme.bg.grey2};
`;

const Title = styled.h2`
  ${offScreen}
`;

const Container = styled.div`
  ${containerStyles}
`;

const Categories = () => {
  return (
    <StyledCategories>
      <Title>Categories</Title>
      <Container>
        <List />
      </Container>
    </StyledCategories>
  );
};

export default memo(Categories);
