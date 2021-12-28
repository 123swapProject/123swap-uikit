import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>       
      <circle cx="6.5" cy="6.5" r="6.5"/>
      <circle cx="11.5" cy="11.5" r="6.5"/>
    </Svg>
  );
};

export default Icon;
