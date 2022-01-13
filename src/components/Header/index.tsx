import React from "react";
import NavItem from "./NavItem";
import { Logo, Nav, NavMenu, Profile } from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <NavItem src="/images/home-icon.svg" title="Home" link="/" />
        <NavItem src="/images/search-icon.svg" title="Search" />
        <NavItem src="/images/watchlist-icon.svg" title="Watchlist" />
        <NavItem src="/images/original-icon.svg" title="Originals" />
        <NavItem src="/images/movie-icon.svg" title="Movies" />
        <NavItem src="/images/series-icon.svg" title="Series" />
      </NavMenu>
      <Profile src="/images/profile.jpg" />
    </Nav>
  );
};

export default Header;
