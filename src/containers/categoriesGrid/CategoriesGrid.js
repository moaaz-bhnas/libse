import { memo } from "react";
import styled from "styled-components";
import Item from "../../components/categoriesGrid/Item";
import categories from "../../utils/data/categories";
import { rawList } from "../../utils/style";

const List = styled.ul`
  ${rawList}
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`;

const CategoriesGrid = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.en} category={category} />
      ))}
    </List>
  );
};

export default memo(CategoriesGrid);
