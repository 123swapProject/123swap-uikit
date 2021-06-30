import React from "react";
import styled from "styled-components";
import {Link} from "../../components/Link";
import {HelpIcon} from "../../components/Svg";
import {Modal} from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import {Login} from "./types";
import NetworkCard from "./NetworkCard";

interface Props {
    login: Login;
    onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({login, onDismiss = () => null}) => (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>

        <h5 style={{marginBottom: "10px"}}>Network</h5>
        <div>
            <NetworkCard
                key={"BSC"}
                networkConfig={{title: "BSC", active:true, disabled: false}}
            />
            <NetworkCard
                key={"ETH"}
                networkConfig={{title: "ETH", active:false, disabled: true}}
            />
            <NetworkCard
                key={"NEO"}
                networkConfig={{title: "NEO", active:false, disabled: true}}
            />
        </div>

        <h5 style={{marginBottom: "10px"}}>Wallet</h5>
        {config.map((entry, index) => (
            <WalletCard
                key={entry.title}
                login={login}
                walletConfig={entry}
                onDismiss={onDismiss}
                mb={index < config.length - 1 ? "8px" : "0"}
            />
        ))}
        <HelpLink
            href="https://docs.123swap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
            external
        >
            <HelpIcon color="primary" mr="6px"/>
            Learn how to connect
        </HelpLink>
    </Modal>
);

export default ConnectModal;
