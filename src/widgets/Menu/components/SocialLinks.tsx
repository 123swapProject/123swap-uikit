import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-between;
  
  & a {
    margin: 0;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const SocialLinks: React.FC = () => (
  <Flex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "26px", color: "textSubtle", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "10px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
