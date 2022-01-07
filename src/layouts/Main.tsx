import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

export default MainLayout;

const Body = styled.div`
  width: 100vw;
  height: calc(100vh - 9vh);
  background-color: yellow;
`;
