import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectMovie } from "../../redux/Movies/moviesSelectors";
import {
  AddButton,
  Background,
  Container,
  Controls,
  Description,
  GroupWatchButton,
  ImageTitle,
  PlayButton,
  Subtitle,
  TrailerButton,
} from "./styles";

interface DetailsPageProps {}

const DetailsPage: React.FC<DetailsPageProps> = () => {
  const { id } = useParams();
  const movie = useSelector(selectMovie(id));

  return (
    <Container>
      <Background>
        <img src={movie?.backgroundImg} />
      </Background>
      <ImageTitle>
        <img src={movie?.titleImg} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>+</AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>{movie?.subtitle}</Subtitle>
      <Description>{movie?.description}</Description>
    </Container>
  );
};

export default DetailsPage;
