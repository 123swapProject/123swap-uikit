import React from "react";
import Link from "./Link";
import styled from "styled-components";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";


const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.gradients.linear};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <StyledLink external {...props}>
      {children}
      <OpenNewIcon color="primary" ml="4px" />
    </StyledLink>
  );
};

export default LinkExternal;
