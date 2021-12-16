import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10 20.28C7.98458 19.8808 6.16639 18.8041 4.84751 17.2288C3.52864 15.6534 2.78847 13.6742 2.75 11.62C2.79988 9.21607 3.80226 6.93033 5.53678 5.26518C7.27131 3.60003 9.59605 2.69175 12 2.73999C14.404 2.69175 16.7287 3.60003 18.4632 5.26518C20.1977 6.93033 21.2001 9.21607 21.25 11.62C21.2138 13.6759 20.4747 15.6575 19.1556 17.2349C17.8365 18.8123 16.0171 19.8905 14 20.29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.99001 20.3L9.01001 17.53" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.9901 20.3L7.1001 21.24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.57 12.77L9.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.0001 9L11.5701 12.77" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
