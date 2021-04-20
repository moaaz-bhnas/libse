import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import useTranslation from "../../hooks/useTranslation";
import { offScreen } from "../../utils/style";

const StyledBottom = styled.nav``;

const Title = styled.h2`
  ${offScreen}
`;

const Bottom = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <StyledBottom>
      <Title>{t("appNav")}</Title>
    </StyledBottom>
  );
};

export default memo(Bottom);
