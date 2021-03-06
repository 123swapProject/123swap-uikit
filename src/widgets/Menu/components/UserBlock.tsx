import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import {Login} from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  network: string;
  setNetwork?: (network:string) => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, network, setNetwork }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, network, setNetwork, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
