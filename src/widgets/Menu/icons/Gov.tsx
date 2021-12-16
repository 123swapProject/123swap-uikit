import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 20"  {...props} height="22px">
      <path d="M13.1701 19.25H0.830078" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.6299 4.86003H2.37988V19.25H11.6299V4.86003Z" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.31042 1.78003H4.69043V4.86003H9.31042V1.78003Z" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 1.78003V0.750031" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.54004 7.94003V16.17" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.45996 7.94003V16.17" stroke="#777E90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
