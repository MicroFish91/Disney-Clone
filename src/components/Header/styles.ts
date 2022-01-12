import styled from "styled-components";

// ---- index.tsx ----
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  height: 12vh;

  background-color: black;
`;

export const Logo = styled.img`
  width: 10em;
  padding: 0.8em;
  padding-top: 0.5em;
  margin: 0 1.8em;
  margin-right: 8em;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;

  align-items: center;

  width: 60%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Profile = styled.img`
  width: 3.7em;
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5em;
  margin-right: 3em;
`;

// ---- NavItem.tsx ----
export const NavItemContainer = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  padding: 1em;

  img {
    width: 1.5em;
  }

  span {
    margin-left: 0.2em;
    position: relative;
    cursor: pointer;

    &:after {
      content: "";

      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;

      height: 2px;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center;

      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      background-color: white;
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
