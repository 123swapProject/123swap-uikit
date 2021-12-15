import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 60" {...props}>
        <path d="M25.84 1.90735e-06L-1.52588e-05 14.92V44.75L25.84 59.66L51.66 44.75V14.92L25.84 1.90735e-06ZM44.01 40.33L25.84 50.82L7.65999 40.33V19.33L25.84 8.84L44.01 19.33V40.33Z" fill="#FFF"/>
        <path style={{mixBlendMode:"multiply"}} d="M25.84 59.66L51.66 44.75V14.92L25.84 1.90735e-06V8.84999L44.01 19.34V40.34L25.84 50.82V59.66Z" fill="#FFF"/>
        <path style={{mixBlendMode:"multiply"}} d="M25.82 0L0 14.91L0 44.74L25.82 59.66V50.81L7.64999 40.32V19.32L25.82 8.84V0Z" fill="#FFF"/>
        <path d="M37.89 36.8L25.83 43.76L13.76 36.8V22.87L25.83 15.9L37.89 22.87L32.87 25.77L25.83 21.7L18.79 25.77V33.89L25.83 37.96L32.87 33.89L37.89 36.8Z" fill="#FFF"/>
    </Svg>
  );
};

export default Icon;
