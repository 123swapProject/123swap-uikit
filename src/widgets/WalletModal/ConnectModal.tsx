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
`;

const ConnectModal: React.FC<Props> = ({login, network, setNetwork, onDismiss = () => null}) => {
    const [networkId, setNetworkTab] = useState(network);

    return (<Modal title="Connect to a wallet" onDismiss={onDismiss}>

        <h5 style={{marginBottom: "10px"}}>Network</h5>
        <div>
            {networks.slice(0, 5).map((entry, index) => (
                <NetworkCard
                    setNetworkTab={setNetworkTab}
                    setNetwork={setNetwork}
                    active={networkId == entry.networkId}
                    key={entry.title}
                    networkConfig={entry}
                />
            ))}
        </div>
        <div>
            {networks.slice(5, 10).map((entry, index) => (
                <NetworkCard
                    setNetworkTab={setNetworkTab}
                    setNetwork={setNetwork}
                    active={networkId == entry.networkId}
                    key={entry.title}
                    networkConfig={entry}
                />
            ))}
        </div>

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
    </Modal>)
};

export default ConnectModal;
