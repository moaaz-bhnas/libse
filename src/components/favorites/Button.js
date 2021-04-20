import { memo } from "react";
import { useRouter } from "next/router";
import { CircleButton } from "../button/Button";
import HeartIcon from "../svgs/Heart";
import useTranslation from "../../hooks/useTranslation";

const Button = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <CircleButton aria-label={t("toggleFav")}>
      <HeartIcon className="favorites__svg" />
    </CircleButton>
  );
};

export default memo(Button);
