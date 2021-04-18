import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import styled from "styled-components";
import { sizes } from "../../utils/style";
import getDirection from "../../utils/helpers/getDirection";
import PropTypes from "prop-types";

const inputWidth = 20;
const smallInputWidth = 3.25;
const iconWidth = 1.25;

const StyledInput = styled.input`
  width: ${inputWidth}em;
  padding: 1em 0 1em ${smallInputWidth}em;
  border: none;
  border-radius: ${sizes.borderRadius.default};
  background-color: ${({ theme }) => theme.bg.default};
  background-image: url("/images/search.svg");
  background-repeat: no-repeat;
  background-size: ${iconWidth}em ${iconWidth}em;
  background-position-x: ${({ dir }) =>
    dir === "ltr" ? 1 : inputWidth - iconWidth - 1}em;
  background-position-y: 50%;

  &::placeholder {
    color: ${({ theme }) => theme.text.grey};
    font-size: 0.95rem;
  }

  &:focus {
    &::placeholder {
      color: #999;
    }
  }

  @media screen and (max-width: 730px) {
    width: ${({ active }) => (active ? inputWidth : smallInputWidth)}em;
    cursor: pointer;

    &:focus {
      width: ${inputWidth}em;
    }
  }
`;

const Input = ({ active, setActive }) => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  const handleKeyDown = useCallback(({ key }) => {
    if (key === "Tab") {
      setActive(false);
    }
  }, []);

  return (
    <StyledInput
      type="search"
      aria-label={t("search")}
      placeholder={t("search")}
      active={active}
      dir={getDirection(locale)}
      onFocus={() => setActive(true)}
      onKeyDown={handleKeyDown}
    />
  );
};

Input.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default memo(Input);
