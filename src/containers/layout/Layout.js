import { memo } from "react";
import { useRouter } from "next/router";
import getDirection from "../../utils/helpers/getDirection";
import styled from "styled-components";
import Header from "../header/Header";
import { containerStyles } from "../../utils/style";

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

      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default memo(Layout);
