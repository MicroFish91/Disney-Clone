import styled from "styled-components";

// https://www.w3schools.com/cssref/pr_background-position.asp
export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: calc(100vh - 12vh);

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    content: "";
    z-index: -1;

    background-image: url("/images/home-background.png");
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Body = styled.div`
  padding: 0 3em;
`;
