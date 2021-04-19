import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { rawLink } from "../../utils/style";

const StyledItem = styled.li``;

const StyledLink = styled.a`
  ${rawLink};
  font-weight: 500;
  display: block;
  margin-right: 0.5em;
  padding: 0.75em 0.5em;

  &:hover {
    background-color: ${({ theme }) => theme.bg.default};
  }
`;

const Item = ({ category }) => {
  return (
    <StyledItem>
      <Link href="/category" passHref>
        <StyledLink>{category}</StyledLink>
      </Link>
    </StyledItem>
  );
};

Item.propTypes = {
  category: PropTypes.string,
};

export default memo(Item);
