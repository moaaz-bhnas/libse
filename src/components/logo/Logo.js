import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Logo = ({ width = 100 }) => {
  return (
    <Image
      src="/images/logo.png"
      alt="Libse logo"
      width={width}
      height={width / 2}
      layout="fixed"
      quality={100}
      priority={true}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.number,
};

export default memo(Logo);
