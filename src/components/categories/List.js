import { memo } from "react";
import styled from "styled-components";
import categories from "../../utils/data/categories";
import { rawList } from "../../utils/style";
import Item from "./Item";

const StyledList = styled.ul`
  ${rawList}
  display: flex;
`;

const List = () => {
  return (
    <StyledList>
      {categories.map((category, index) => (
        <Item key={index} category={category} />
      ))}
    </StyledList>
  );
};

export default memo(List);
