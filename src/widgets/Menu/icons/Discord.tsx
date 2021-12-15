import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-1 0 24 24" {...props}>
        <path d="M20.096 2.55679C18.1568 0.998386 15.0904 0.734386 14.9608 0.723186C14.756 0.705586 14.5616 0.821586 14.4776 1.00879C14.4744 1.01519 14.3032 1.51199 14.1376 1.99119C16.3912 2.38559 17.9224 3.26079 18.004 3.30879C18.3864 3.53119 18.5144 4.02159 18.2912 4.40319C18.1432 4.65759 17.8752 4.79999 17.6 4.79999C17.4632 4.79999 17.3256 4.76559 17.1992 4.69199C17.1768 4.67839 14.9304 3.39999 12.0016 3.39999C9.07199 3.39999 6.82479 4.67919 6.80239 4.69199C6.42079 4.91359 5.93119 4.78319 5.70959 4.40079C5.48799 4.01999 5.61679 3.53119 5.99759 3.30879C6.07919 3.26079 7.61599 2.38239 9.87599 1.98879C9.70159 1.50399 9.52559 1.01519 9.52239 1.00879C9.43839 0.820786 9.24399 0.702386 9.03919 0.723186C8.90959 0.733586 5.84319 0.997586 3.87839 2.57759C2.85119 3.52639 0.799988 9.07359 0.799988 13.8696C0.799988 13.9544 0.821588 14.0368 0.863988 14.1104C2.28079 16.5984 6.14319 17.2496 7.02319 17.2776C7.02879 17.2784 7.03359 17.2784 7.03839 17.2784C7.19359 17.2784 7.33999 17.204 7.43199 17.0784L8.38399 15.7888C6.29599 15.2856 5.19199 14.4944 5.12559 14.4456C4.77039 14.184 4.69359 13.6832 4.95519 13.3272C5.21599 12.9728 5.71519 12.8944 6.07039 13.1544C6.09999 13.1736 8.13759 14.6 12 14.6C15.8776 14.6 17.9096 13.168 17.9296 13.1536C18.2848 12.896 18.7856 12.9736 19.0456 13.3304C19.3048 13.6856 19.2296 14.1832 18.876 14.444C18.8096 14.4928 17.7112 15.2824 15.628 15.7856L16.568 17.0776C16.66 17.204 16.8064 17.2776 16.9616 17.2776C16.9672 17.2776 16.972 17.2776 16.9768 17.2768C17.8576 17.2488 21.72 16.5976 23.136 14.1096C23.1784 14.036 23.2 13.9536 23.2 13.8688C23.2 9.07359 21.1488 3.52639 20.096 2.55679ZM8.79999 12.2C7.91599 12.2 7.19999 11.3048 7.19999 10.2C7.19999 9.09519 7.91599 8.19999 8.79999 8.19999C9.68399 8.19999 10.4 9.09519 10.4 10.2C10.4 11.3048 9.68399 12.2 8.79999 12.2ZM15.2 12.2C14.316 12.2 13.6 11.3048 13.6 10.2C13.6 9.09519 14.316 8.19999 15.2 8.19999C16.084 8.19999 16.8 9.09519 16.8 10.2C16.8 11.3048 16.084 12.2 15.2 12.2Z"/>
    </Svg>
  );
};

export default Icon;
