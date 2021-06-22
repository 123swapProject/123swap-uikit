import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import {logo_round} from "../../../images/index"

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={logo_round} style={{height:25, width:25, marginRight:10}} {...props}/>

  );
};

export default Icon;
