import React from "react";
import ImageSlider from "../../components/ImageSlider";
import Movies from "../../components/Movies";
import Viewers from "../../components/Viewers";
import { Body, Container } from "./styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Container>
      <ImageSlider />
      <Body>
        <Viewers />
        <Movies />
      </Body>
    </Container>
  );
};

export default HomePage;
