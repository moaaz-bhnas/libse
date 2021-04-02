import { memo } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import { DefaultButton } from "../button/Button";

const Language = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return <DefaultButton>{t("language")}</DefaultButton>;
};

export default memo(Language);
