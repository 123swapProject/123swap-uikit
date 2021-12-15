import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 254 254" {...props}>
      <g id="Page-1">
	<g id="Artboard">
		<g id="Group-6">
			<path id="Fill-1" fill="#48A9A6" d="M128,0c70.6,0,128,57.3,128,127.9s-57.4,127.9-128,127.9S0,198.5,0,127.9S57.4,0,128,0z"/>
			<polygon id="Fill-2" fill="#FFFFFF" points="62.3,88.6 114.9,88.6 114.9,62.3 62.3,62.3 			"/>
			<polygon id="Fill-3" fill="#FFFFFF" points="141.1,88.6 193.7,88.6 193.7,62.3 141.1,62.3 			"/>
			<polygon id="Fill-4" fill="#FFFFFF" points="193.7,141.1 167.4,141.1 167.4,167.4 141.1,167.4 141.1,193.7 193.7,193.7 			"/>
			<polygon id="Fill-5" fill="#FFFFFF" points="114.9,193.7 114.9,167.4 88.6,167.4 88.6,141.1 62.3,141.1 62.3,193.7 			"/>
		</g>
	</g>
</g>
    </Svg>
  );
};

export default Icon;
