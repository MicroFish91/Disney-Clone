import React from "react";
import styled from "styled-components";
import ImageSlider from "../../components/ImageSlider";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
};

export default HomePage;

// https://www.w3schools.com/cssref/pr_background-position.asp
const Container = styled.div`
  position: relative;

  width: 100vw;
  height: calc(100vh - 9vh);

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
