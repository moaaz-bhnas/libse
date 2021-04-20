import { memo } from "react";
import styled from "styled-components";
import Button from "../../components/favorites/Button";
import Dropdown from "../../components/favorites/Dropdown";
import { mediaQueries } from "../../utils/style";

const StyledFavorites = styled.div`
  margin-right: 1em;

  .favorites__svg {
    width: 21px;
    vertical-align: top;
  }

  @media screen and (max-width: ${mediaQueries.header}) {
    display: none;
  }
`;

const Favorites = () => {
  return (
    <StyledFavorites>
      <Button />
      <Dropdown />
    </StyledFavorites>
  );
};

export default memo(Favorites);
