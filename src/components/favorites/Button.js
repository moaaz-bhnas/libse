import { memo } from "react";
import { useRouter } from "next/router";
import { CircleButton } from "../button/Button";
import HeartIcon from "../svgs/Heart";
import useTranslation from "../../hooks/useTranslation";
import PropTypes from "prop-types";

const Button = ({ active, setActive }) => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <CircleButton
      aria-expanded={active}
      onClick={() => setActive(!active)}
      aria-label={t("toggleFav")}
    >
      <HeartIcon />
    </CircleButton>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default memo(Button);
