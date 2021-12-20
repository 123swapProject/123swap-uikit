import React from "react";
import { SvgProps } from "../../../components/Svg/types";
import { LogotypeIcon } from ".";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  
  const iconprops = { style: {height: 50, width: "auto"} }
  return (
      <LogotypeIcon {...iconprops} />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
