import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../../components/ImageSlider";
import Movies from "../../components/Movies";
import Viewers from "../../components/Viewers";
import { selectMovies } from "../../redux/Movies/moviesSelectors";
import { getMoviesAction } from "../../redux/Movies/moviesSlice";
import { Body, Container } from "./styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  console.log(movies);

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
