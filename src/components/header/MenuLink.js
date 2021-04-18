import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { mediaQueries } from "../../utils/style";

const StyledLink = styled.a`
  display: none;

  @media screen and (max-width: ${mediaQueries.menu}) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3em;
    height: 3em;
    border-radius: 0.5em;
    margin-right: 0.5em;

    &:hover {
      background-color: ${({ theme }) => theme.bg.default};
    }
  }
`;

const MenuLink = () => {
  return (
    <Link href="/bookmarks" passHref>
      <StyledLink>
        <Image
          src="/images/menu.svg"
          alt="Bookmarks"
          width={25}
          height={25}
          quality={100}
          priority={true}
        />
      </StyledLink>
    </Link>
  );
};

export default memo(MenuLink);
