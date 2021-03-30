import { memo } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import SearchForm from "../searchForm/SearchForm";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bg.header};
`;

const Title = styled.h1`
  position: absolute;
  left: -200em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Libse</Title>
      <Container>
        <Logo />
        <SearchForm />
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
