import React from "react";
import { Link } from "react-router-dom";
import { NavItemContainer } from "./styles";

interface NavItemProps {
  src: string;
  title: string;
  link?: string;
}

const NavItem: React.FC<NavItemProps> = ({ src, title, link }) => {
  return (
    <>
      {link ? (
        <Link to={link} style={{ textDecoration: "none" }}>
          <NavItemContainer>
            <img src={src} />
            <span>{title}</span>
          </NavItemContainer>
        </Link>
      ) : (
        <NavItemContainer>
          <img src={src} />
          <span>{title}</span>
        </NavItemContainer>
      )}
    </>
  );
};

export default NavItem;
