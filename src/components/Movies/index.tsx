import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovies } from "../../redux/Movies/moviesSelectors";
import { Container, Content, Wrap } from "./styles";

interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.cardImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

export default Movies;
