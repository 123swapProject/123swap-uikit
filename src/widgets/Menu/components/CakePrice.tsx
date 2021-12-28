import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  border-top: ${({ theme }) => theme.colors.borderColor};
  border-bottom: ${({ theme }) => theme.colors.borderColor};
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;
const SkeletonWrap = styled.div`
  width: 100%;
  padding: 20px;
  border-top: solid 1px ${({ theme }) => theme.colors.borderColor};
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};

`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink href="https://bscscan.com/address/0x843819dF7e79C48C5F9Ca84e371c1B4464AB77BD" target="_blank">
      <PancakeRoundIcon width="24px" height="24px" style={{marginRight:"10px"}} />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <SkeletonWrap>
      <Skeleton width={80} height={24}/>
    </SkeletonWrap>
  );
};

export default React.memo(CakePrice);