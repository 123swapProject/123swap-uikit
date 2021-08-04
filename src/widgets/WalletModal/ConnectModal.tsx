import React from "react";
import styled from "styled-components";
import {Link} from "../../components/Link";
import {HelpIcon} from "../../components/Svg";
import {Modal} from "../Modal";
import WalletCard from "./WalletCard";
import {connectors, networks} from "./config";
import {Login} from "./types";
import NetworkCard from "./NetworkCard";
import {NetworkNames} from "./index";

interface Props {
    login: Login;
    network: NetworkNames;
    setNetwork?: (network:string) => null;
    onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({login, network, setNetwork, onDismiss = () => null}) => (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>

        <h5 style={{marginBottom: "10px"}}>Network</h5>
        <div>
            {networks.map((entry, index) => (
                <NetworkCard
                    setNetwork={setNetwork}
                    active={network==entry.networkId}
                    key={entry.title}
                    networkConfig={entry}
                />
            ))}
        </div>

        <h5 style={{marginBottom: "10px"}}>Wallet</h5>

        {networks.filter(entry => network==entry.networkId).map((entry, index) => (entry.wallets.map((entry, index) => (
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
    </Modal>
);

export default ConnectModal;
