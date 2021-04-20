import { memo } from "react";
import { useRouter } from "next/router";
import getDirection from "../../utils/helpers/getDirection";
import styled from "styled-components";
import Header from "../header/Header";
import { containerStyles } from "../../utils/style";
import Categories from "../categories/Categories";
import Bottom from "../bottom/Bottom";

const StyledLayout = styled.div``;

const Main = styled.main``;

const Container = styled.div`
  ${containerStyles}
`;

const Layout = ({ children }) => {
  const { locale } = useRouter();

  return (
    <StyledLayout dir={getDirection(locale)}>
      <Header />
      <Categories />

      <Main>
        <Container>{children}</Container>
      </Main>

      <Bottom />
    </StyledLayout>
  );
};

export default memo(Layout);
