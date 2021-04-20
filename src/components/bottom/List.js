import { memo } from "react";
import styled from "styled-components";
import { rawList } from "../../utils/style";
import Home from "../svgs/Home";
import Categories from "../svgs/Categories";
import Heart from "../svgs/Heart";
import More from "../svgs/testt";
import Item from "./Item";

const StyledList = styled.ul`
  ${rawList}
  display: flex;
  justify-content: center;
`;

const items = [
  { name: "home", href: "/", Icon: Home },
  { name: "categories", href: "/categories", Icon: Categories },
  { name: "favorites", href: "/favorites", Icon: Heart },
  { name: "More", href: "/more", Icon: More },
];

const List = () => {
  return (
    <StyledList>
      {items.map((item) => (
        <Item key={item.href} item={item} />
      ))}
    </StyledList>
  );
};

export default memo(List);
