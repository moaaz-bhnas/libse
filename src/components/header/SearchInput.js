import { memo } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import styled from "styled-components";
import { sizes } from "../../utils/style";

const Input = styled.input`
  width: 20em;
  padding: 1em 0 1em 3em;
  border: none;
  border-radius: ${sizes.borderRadius.default};
  background-color: ${(props) => props.theme.bg.default};
  background-image: url("/images/search.svg");
  background-repeat: no-repeat;
  background-size: 1.25em 1.25em;
  background-position: 1em 50%;

  &::placeholder {
    color: ${(props) => props.theme.text.grey};
    font-size: 0.95rem;
  }

  &:focus {
    &::placeholder {
      color: #999;
    }
  }
`;

const SearchInput = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <Input type="search" aria-label={t("search")} placeholder={t("search")} />
  );
};

export default memo(SearchInput);
