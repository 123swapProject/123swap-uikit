import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {networkLocalStorageKey} from "./config";
import {NetworkConfig} from "./types";

interface Props {
    networkConfig: NetworkConfig;
    active:boolean;
    setNetwork?:(network:string) => void;
    setNetworkTab:(network:string) => void;
}

const NetworkCard: React.FC<Props> = ({networkConfig, active, setNetwork = (network:string) => null, setNetworkTab}) => {
    const {title, icon: Icon, disabled } = networkConfig;
    const variant = active ? "primary" : "tertiary";
    const textColor = active ? "success" : "primary";
    return (
        <Button
            disabled={disabled}
            variant={variant}
            onClick={() => {
                setNetworkTab(networkConfig.networkId)
                setNetwork(networkConfig.networkId);
                window.localStorage.setItem(networkLocalStorageKey, networkConfig.networkId);
            }}
            style={{justifyContent: "space-between", width: "min-content", display: "inline-block"}}
            mb={"8px"}
            mr={"5px"}
            id={`wallet-connect-${title.toLocaleLowerCase()}`}
        >
            <Text bold color={textColor}>
                {title}
            </Text>
        </Button>
    );
};

export default NetworkCard;
