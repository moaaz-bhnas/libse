import { memo } from "react";
import styled from "styled-components";

const Input = styled.input``;

const SearchInput = () => {
  return (
    <Input
      type="search"
      aria-label="Search for a product"
      placeholder="Search for a product"
    />
  );
};

export default memo(SearchInput);
