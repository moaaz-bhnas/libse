import { memo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { rawLink, transitions } from "../../utils/style";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";

const StyledItem = styled.li``;

const StyledLink = styled.a`
  ${rawLink};
  display: block;
  padding: 0.5em 0.75em;
  margin: 0 0.25em;

  .svg {
    width: 2em;
    fill: transparent;
    stroke: ${({ theme }) => theme.icon.bottomLight};
    stroke-width: 40;
    transition-property: stroke, stroke-width;
    transition-duration: ${transitions.stroke.default};
  }

  &:hover,
  &:focus {
    .svg {
      stroke: ${({ theme }) => theme.icon.bottomDark};
      stroke-width: 50;
    }
  }
`;

const Item = ({ item: { name, href, Icon } }) => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledItem>
      <Link href={href} passHref>
        <StyledLink aria-label={t(name)}>
          <Icon title={name} />
        </StyledLink>
      </Link>
    </StyledItem>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default memo(Item);
