import React, { useState } from 'react';
import styled from "styled-components";
import {Link} from "../../components/Link";
import {HelpIcon} from "../../components/Svg";
import {Modal} from "../Modal";
import WalletCard from "./WalletCard";
import {connectors, networks} from "./config";
import {Login} from "./types";
import NetworkCard from "./NetworkCard";

interface Props {
    login: Login;
    network: string;
    setNetwork?: (network:string) => void;
    onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.gradients.linear};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledModal = styled(Modal)`
  min-width: initial;
  max-width: 512px;
  
  & h5 {
    color: ${({ theme }) => theme.colors.input};
  }
`;
const StyledNetworks = styled.div`
  display: flex;
  padding-bottom: 20px;
  flex-wrap: wrap;
  & button {
    flex: 1 0 21%;
    margin: 5px;
    height: 100px;
    flex: 1 0 21%;
    padding: 5px;
  }
`;

const ConnectModal: React.FC<Props> = ({login, network, setNetwork, onDismiss = () => null}) => {
    const [networkId, setNetworkTab] = useState(network);

    return (<StyledModal title="Connect wallet" onDismiss={onDismiss} >

        <h5 style={{marginBottom: "10px"}}>Network</h5>
        <StyledNetworks>
            {networks.map((entry, index) => (
                <NetworkCard
                    setNetworkTab={setNetworkTab}
                    setNetwork={setNetwork}
                    active={networkId == entry.networkId}
                    key={entry.title}
                    networkConfig={entry}
                />
            ))}
        </StyledNetworks>
        <h5 style={{marginBottom: "10px"}}>Wallet</h5>

        {networks.filter(entry => networkId == entry.networkId).map((entry, index) => (entry.wallets.map((entry, index) => (
            <WalletCard
                key={entry.title}
                login={login}
                walletConfig={entry}
                onDismiss={onDismiss}
                mb={index < connectors.length - 1 ? "8px" : "0"}
            />
        ))))}

        <HelpLink
            href="https://docs.123swap.finance/faq"
            external
        >
            <HelpIcon color="primary" mr="6px"/>
            Learn how to connect
        </HelpLink>
    </StyledModal>)
};

export default ConnectModal;
