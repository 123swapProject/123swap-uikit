import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  padding-bottom: 40px;
  margin: 40px;
  & h2 {
    font-size: 32px;
  }
`;
export const IconClose = styled.div`
  border: solid 1px #353945;
  border-radius: 50%;
  padding: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;
  & :hover {
      opacity: .8;
  }
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  padding: 0 40px 40px 40px;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconClose onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon color="success" /> 
    </IconClose>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  background: #18191D;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 16px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;
