import { memo } from "react";
import styled from "styled-components";
import Logo from "../../components/header/LogoLink";
import SearchForm from "../../components/header/SearchForm";
import Auth from "../../components/header/Auth";
import Language from "../../components/header/Language";
import { containerStyles } from "../../utils/style";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bg.header};
`;

const Title = styled.h1`
  position: absolute;
  left: -200em;
`;

const Container = styled.div`
  ${containerStyles};
  display: flex;
  align-items: center;
  height: 3.5em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Libse</Title>
      <Container>
        <Logo />
        <SearchForm />
        <Auth />
        <Language />
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
