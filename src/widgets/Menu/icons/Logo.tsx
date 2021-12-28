import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";
import { LogotypeIcon } from ".";

interface LogoProps extends SvgProps {
  isDark: boolean;
}
const StyledLogoWrapper = styled.div`
  @media (max-width: 968px) {
    display: none;
  }
`

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  
  const iconprops = { style: {height: 50, width: "auto"} }
  return (
    <StyledLogoWrapper>
      <LogotypeIcon {...iconprops} />
    </StyledLogoWrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
