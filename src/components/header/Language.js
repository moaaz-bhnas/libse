import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import useTranslation from "../../hooks/useTranslation";
import { DefaultButton } from "../button/Button";

const Language = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { t } = useTranslation(locale);

  const handleClick = useCallback(() => {
    router.push(pathname, pathname, { locale: locale === "ar" ? "en" : "ar" });
  }, [locale]);

  return <DefaultButton onClick={handleClick}>{t("language")}</DefaultButton>;
};

export default memo(Language);
