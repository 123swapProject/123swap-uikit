import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: transparent;
  display: inline-flex;
  border-radius: 0;

  & > button:not(:last-child),
  & > a:not(:last-child) {
    border-radius: 0;
    border-right: solid 2px #353945;
  }
`;

export default StyledButtonMenu;
