import React from "react";
import { SvgProps } from "../../../components/Svg/types";
import {logo_white, logo_black} from "../../../images/index"

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const logo = isDark ? logo_white : logo_black;
  return (
    <img src={logo} style={{height: 45}}/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
