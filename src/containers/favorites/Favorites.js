import { memo, useState } from "react";
import styled from "styled-components";
import Button from "../../components/favorites/Button";
import Dropdown from "../../components/favorites/Dropdown";
import { mediaQueries, transitions } from "../../utils/style";

const StyledFavorites = styled.div`
  margin-right: 1em;

  @media screen and (max-width: ${mediaQueries.header}) {
    display: none;
  }
`;

const Favorites = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledFavorites>
      <Button active={active} setActive={setActive} />
      {active && <Dropdown />}
    </StyledFavorites>
  );
};

export default memo(Favorites);
