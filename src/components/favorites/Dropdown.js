import { memo } from "react";
import styled from "styled-components";
import { rawList } from "../../utils/style";

const StyledDropdown = styled.ul`
  ${rawList}
`;

const Dropdown = () => {
  return <StyledDropdown></StyledDropdown>;
};

export default memo(Dropdown);
