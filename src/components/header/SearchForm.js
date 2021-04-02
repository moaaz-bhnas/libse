import { memo } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const StyledSearchForm = styled.form`
  margin-right: auto;
`;

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <SearchInput />
    </StyledSearchForm>
  );
};

export default memo(SearchForm);
