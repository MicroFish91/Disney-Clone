import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ImageSlider from "../../components/ImageSlider";
import Movies from "../../components/Movies";
import Viewers from "../../components/Viewers";
import { getMoviesAction } from "../../redux/Movies/moviesSlice";
import { Body, Container } from "./styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);

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
