import styled from "styled-components";

// ---- index.tsx ----
export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

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
  width: 5em;
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5em;
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
  }
`;
