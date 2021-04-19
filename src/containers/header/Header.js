import { memo } from "react";
import styled from "styled-components";
import Logo from "../../components/header/LogoLink";
import SearchForm from "../../components/search/Form";
import Auth from "../../components/header/Auth";
import Language from "../../components/header/Language";
import { containerStyles, offScreen, sizes } from "../../utils/style";
import MenuLink from "../../components/header/MenuLink";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bg.header};
`;

const Title = styled.h1`
  ${offScreen}
`;

const Navigation = styled.nav`
  ${containerStyles};
  display: flex;
  align-items: center;
  height: ${sizes.height.header};
  position: relative;
`;

const NavTitle = styled.h2`
  ${offScreen}
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Libse</Title>
      <Navigation>
        <NavTitle>Navigation</NavTitle>
        <Logo />
        <SearchForm />
        <Auth />
        <MenuLink />
        <Language />
      </Navigation>
    </StyledHeader>
  );
};

export default memo(Header);
