import React from "react";
import { NavItemContainer } from "./styles";

interface NavItemProps {
  src: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ src, title }) => {
  return (
    <NavItemContainer>
      <img src={src} />
      <span>{title}</span>
    </NavItemContainer>
  );
};

export default NavItem;
