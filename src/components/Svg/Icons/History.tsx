import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <path d="M27 15C27 8.38453 21.6155 3 15 3C8.38453 3 3 8.38453 3 15C3 21.6155 8.38453 27 15 27C15.1325 27.0019 15.2641 26.9774 15.387 26.928C15.51 26.8786 15.6219 26.8052 15.7163 26.7122C15.8107 26.6191 15.8856 26.5082 15.9368 26.386C15.9879 26.2637 16.0142 26.1325 16.0142 26C16.0142 25.8675 15.9879 25.7363 15.9368 25.614C15.8856 25.4918 15.8107 25.3809 15.7163 25.2878C15.6219 25.1948 15.51 25.1214 15.387 25.072C15.2641 25.0226 15.1325 24.9981 15 25C9.46547 25 5 20.5345 5 15C5 9.46547 9.46547 5 15 5C20.5345 5 25 9.46547 25 15C25 17.512 24.069 19.7905 22.5449 21.5449L20 19L20 25L26 25L23.9609 22.9609C25.8446 20.8405 27 18.0539 27 15Z"/>
<path d="M20.5865 10.6456L20.591 10.7955L20.5865 10.6456C20.4267 10.6503 20.275 10.717 20.1634 10.8314L13.1334 17.8614L10.3038 15.0317C10.2472 14.9731 10.1795 14.9262 10.1047 14.8939C10.0294 14.8614 9.94834 14.8442 9.8663 14.8433C9.78426 14.8425 9.70288 14.858 9.62692 14.889C9.55096 14.92 9.48196 14.9659 9.42394 15.0239C9.36593 15.0819 9.32007 15.1509 9.28906 15.2269C9.25805 15.3029 9.24251 15.3842 9.24334 15.4663C9.24418 15.5483 9.26137 15.6294 9.29392 15.7047C9.32626 15.7795 9.3731 15.8471 9.43173 15.9037L12.6974 19.1694L12.6974 19.1694C12.8131 19.285 12.9699 19.35 13.1334 19.35C13.2969 19.35 13.4537 19.285 13.5694 19.1694L13.5694 19.1694L21.0354 11.7034C21.1241 11.6169 21.1846 11.5057 21.2092 11.3843C21.2338 11.2625 21.2211 11.1361 21.1727 11.0216C21.1242 10.9072 21.0424 10.8101 20.9378 10.743C20.8332 10.6758 20.7107 10.6419 20.5865 10.6456Z"/>
    </Svg>
  );
};

export default Icon;
