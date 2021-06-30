import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export enum NetworkNames {
  ETH = "eth",
  NEO = "neo",
  BSC = "bsc",
  HECO = "heco"
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}

export interface NetworkConfig {
  title: string;
  icon: FC<SvgProps>;
  networkId: NetworkNames;
  active: boolean;
  disabled: boolean;
}