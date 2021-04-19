import { memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import PropTypes from "prop-types";
import { mediaQueries } from "../../utils/style";

const Container = styled.div`
  position: absolute;
  left: 11px;
  cursor: text;

  @media screen and (max-width: ${mediaQueries.search}) {
    cursor: ${({ active }) => (active ? "text" : "pointer")};
  }
`;

const Icon = ({ active }) => {
  return (
    <Container active={active}>
      <Image
        src="/images/search.svg"
        alt=""
        width={20}
        height={20}
        layout="fixed"
        quality={100}
        priority={true}
      />
    </Container>
  );
};

Icon.propTypes = {
  active: PropTypes.bool,
};

export default memo(Icon);
