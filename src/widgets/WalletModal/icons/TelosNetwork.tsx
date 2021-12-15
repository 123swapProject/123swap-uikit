import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 74 24" {...props}>
        <path d="M7.94978 23.5665H10.3693V21.3984H8.10689C6.22157 21.3984 5.5617 20.3615 5.5617 18.6019V9.33235H10.5892V7.22707H5.5617V2.48234H3.23647V6.4101C3.23647 6.94427 2.89083 7.22707 2.45092 7.22707H0V9.33235H3.07936V18.6333C3.07936 21.9326 4.93326 23.5665 7.94978 23.5665Z" fill="white"/>
<path d="M21.8936 23.975C25.727 23.975 28.5865 21.8069 29.4977 18.759H26.9211C26.167 20.6757 24.0931 21.7126 21.925 21.7126C18.5628 21.7126 16.4575 19.5445 16.3319 16.2766H29.6548V15.1769C29.6548 10.4635 26.7011 6.81858 21.7364 6.81858C17.2745 6.81858 13.7238 10.1807 13.7238 15.3968C13.7238 20.2986 16.8975 23.975 21.8936 23.975ZM16.3947 14.0771C16.6461 11.0606 19.0027 9.08097 21.7364 9.08097C24.5016 9.08097 26.7954 10.8092 27.0154 14.0771H16.3947Z" fill="white"/>
<path d="M36.3524 23.5665H37.5464V21.367H36.7923C36.0067 21.367 35.5982 20.8957 35.5982 20.0787V0H33.1159V20.0787C33.1159 22.3097 34.3099 23.5665 36.3524 23.5665Z" fill="white"/>
<path d="M67.2422 23.975C71.0443 23.975 73.5894 21.9012 73.5894 18.8218C73.5894 12.0661 63.7858 15.5225 63.7858 11.3748C63.7858 9.96079 65.1055 8.95529 67.1479 8.95529C69.3161 8.95529 70.4787 9.99221 70.6986 11.5319H73.0867C72.8353 8.57822 70.3216 6.81858 67.305 6.81858C63.88 6.81858 61.3977 8.60964 61.3977 11.3748C61.3977 17.8477 71.17 14.3599 71.17 18.9475C71.17 20.6129 69.8188 21.8069 67.3679 21.8069C64.9798 21.8069 63.5972 20.77 63.3144 18.8218H60.8949C61.1777 21.8697 63.3773 23.975 67.2422 23.975Z" fill="white"/>
<g filter="url(#filter0_i)">
<circle cx="49.0141" cy="15.3327" r="8.6674" fill="url(#paint0_linear)"/>
</g>
<circle cx="49.0141" cy="15.3327" r="8.41151" stroke="url(#paint1_linear)" stroke-opacity="0.12" stroke-width="0.511767"/>
<defs>
<filter id="filter0_i" x="36.2525" y="6.66528" width="21.4289" height="17.3348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-6.1412"/>
<feGaussianBlur stdDeviation="2.04707"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.45098 0 0 0 0 0.980392 0 0 0 0.56 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<linearGradient id="paint0_linear" x1="40.3467" y1="15.3327" x2="57.6815" y2="15.3327" gradientUnits="userSpaceOnUse">
<stop stop-color="#AE73FA"/>
<stop offset="1" stop-color="#AE73FA" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="57.6815" y1="15.3327" x2="40.3467" y2="15.3327" gradientUnits="userSpaceOnUse">
<stop stop-color="#AE73FA"/>
<stop offset="1" stop-color="#AE73FA" stop-opacity="0"/>
</linearGradient>
</defs>
    </Svg>
  );
};

export default Icon;
