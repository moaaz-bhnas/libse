import { memo } from "react";
import styled from "styled-components";
import { rawList } from "../../utils/style";

const StyledList = styled.ul`
  ${rawList}
`;

const List = () => {
  return <StyledList>Enter</StyledList>;
};

export default memo(List);
