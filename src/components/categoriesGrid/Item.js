import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";

const StyledItem = styled.li`
  width: 50%;

  .categoriesGrid__image {
    object-fit: cover;
    object-position: 50% 10%;
  }

  &:first-child {
    .categoriesGrid__image {
      object-position: 50% 50%;
    }
  }
`;

const Item = ({ category }) => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledItem>
      <Image
        src={category.image}
        alt={category[locale]} // change
        className="categoriesGrid__image"
        width={480}
        height={280}
        layout="responsive"
        quality={100}
        priority={true}
      />
    </StyledItem>
  );
};

Item.propTypes = {
  category: PropTypes.object,
};

export default memo(Item);
