import { memo } from "react";
import styled from "styled-components";
import SearchInput from "../input/SearchInput";

const StyledSearchForm = styled.form``;

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <SearchInput />
    </StyledSearchForm>
  );
};

export default memo(SearchForm);
