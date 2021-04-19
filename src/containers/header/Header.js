import { memo } from "react";
import styled from "styled-components";
import Logo from "../../components/header/LogoLink";
import SearchForm from "../../components/search/Form";
import Auth from "../../components/header/Auth";
import Language from "../../components/header/Language";
import { containerStyles, sizes } from "../../utils/style";
import MenuLink from "../../components/header/MenuLink";

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
  height: ${sizes.height.header};
  position: relative;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Libse</Title>
      <Container>
        <Logo />
        <SearchForm />
        <Auth />
        <MenuLink />
        <Language />
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
