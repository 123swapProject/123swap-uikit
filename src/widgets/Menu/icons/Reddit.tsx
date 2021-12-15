import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path d="M14.1297 0.600006C12.452 0.600006 11.2 1.97052 11.2 3.52969V6.22813C8.99978 6.34488 6.9876 6.9315 5.38126 7.85157C4.76224 7.25713 3.93336 6.99316 3.1297 6.99376C2.25835 6.9944 1.36757 7.29634 0.753134 7.98751L0.739072 8.00313L0.725009 8.01876C0.135593 8.75539 -0.0977954 9.7422 0.0593844 10.7219C0.202929 11.6166 0.721107 12.5147 1.62188 13.1031C1.61598 13.2025 1.60001 13.2997 1.60001 13.4C1.60001 17.3696 6.26561 20.6 12 20.6C17.7344 20.6 22.4 17.3696 22.4 13.4C22.4 13.2997 22.384 13.2025 22.3781 13.1031C23.2789 12.5147 23.7971 11.6166 23.9406 10.7219C24.0978 9.7422 23.8644 8.75539 23.275 8.01876L23.2609 8.00313L23.2469 7.98751C22.6324 7.29624 21.7417 6.9944 20.8703 6.99376C20.0666 6.99316 19.2376 7.25691 18.6188 7.85157C17.0124 6.9315 15.0002 6.34488 12.8 6.22813V3.52969C12.8 2.74647 13.2522 2.20001 14.1297 2.20001C14.5462 2.20001 15.0537 2.40873 15.8484 2.68751C16.5203 2.92317 17.3947 3.16136 18.5125 3.23282C18.7799 4.02328 19.5223 4.60001 20.4 4.60001C21.5 4.60001 22.4 3.70001 22.4 2.60001C22.4 1.50001 21.5 0.600006 20.4 0.600006C19.649 0.600006 18.998 1.02434 18.6563 1.64063C17.7007 1.58771 16.9986 1.39577 16.3781 1.17813C15.6551 0.924508 14.9907 0.600006 14.1297 0.600006ZM3.1297 8.59376C3.44581 8.59352 3.74615 8.67648 3.99376 8.81094C3.11057 9.54814 2.44047 10.4095 2.03595 11.35C1.82116 11.0849 1.69173 10.7872 1.64063 10.4688C1.55442 9.9314 1.71523 9.37284 1.97032 9.04219C2.21138 8.78272 2.65158 8.59411 3.1297 8.59376ZM20.8688 8.59376C21.347 8.59411 21.7887 8.7828 22.0297 9.04219C22.2848 9.37284 22.4456 9.9314 22.3594 10.4688C22.3083 10.7872 22.1789 11.0849 21.9641 11.35C21.5596 10.4095 20.8895 9.54814 20.0063 8.81094C20.2533 8.67664 20.5528 8.59352 20.8688 8.59376ZM8.00001 10.2C8.88401 10.2 9.60001 10.916 9.60001 11.8C9.60001 12.684 8.88401 13.4 8.00001 13.4C7.11601 13.4 6.40001 12.684 6.40001 11.8C6.40001 10.916 7.11601 10.2 8.00001 10.2ZM16 10.2C16.884 10.2 17.6 10.916 17.6 11.8C17.6 12.684 16.884 13.4 16 13.4C15.116 13.4 14.4 12.684 14.4 11.8C14.4 10.916 15.116 10.2 16 10.2ZM16.1906 14.6266C15.6794 16.1202 14.0448 17.4 12 17.4C9.95521 17.4 8.32058 16.1208 7.80938 14.7344C8.72938 15.4808 10.2624 16.0141 12 16.0141C13.7376 16.0141 15.2706 15.4802 16.1906 14.6266Z"/>
    </Svg>
  );
};

export default Icon;