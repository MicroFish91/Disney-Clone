import React from "react";
import ImageSlider from "../../components/ImageSlider";
import Viewers from "../../components/Viewers";
import { Container } from "./styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

export default HomePage;
