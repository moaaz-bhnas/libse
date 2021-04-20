import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { rawButton } from "../../utils/style";

const StyledItem = styled.li``;

const Button = styled.button`
  ${rawButton};
  font-weight: 500;
  display: block;
  margin-right: 0.5em;
  padding: 0.85em 0.5em;

  &:hover {
    background-color: ${({ theme }) => theme.bg.default};
  }
`;

const Item = ({ category }) => {
  const { locale } = useRouter();

  return (
    <StyledItem>
      <Button>{category[locale]}</Button>
    </StyledItem>
  );
};

Item.propTypes = {
  category: PropTypes.object,
};

export default memo(Item);
