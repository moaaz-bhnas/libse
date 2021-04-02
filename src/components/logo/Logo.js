import { memo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Logo = ({ width = 100 }) => {
  return (
    <Image
      src="/images/logo.png"
      width={width}
      height={width / 2}
      quality={100}
      priority={true}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.number,
};

export default memo(Logo);
