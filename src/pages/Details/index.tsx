import React from "react";
import styled from "styled-components";

interface DetailsPageProps {}

const DetailsPage: React.FC<DetailsPageProps> = () => {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
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
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>g</GroupWatchButton>
      </Controls>
    </Container>
  );
};

export default DetailsPage;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  padding: 5em 4em;
`;

const Background = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: -1;

  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  min-width: 225px;
  max-width: 27vw;
  margin-bottom: 3vh;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Controls = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;

  background-color: white;

  border: none;
  border-radius: 3px;

  width: auto;
  max-width: 50vw;

  padding: 0.3em 0.8em;
  margin: 0.5em;

  // May want to omit since different text spans
  img {
    max-width: 60%;
    height: auto;
  }

  span {
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TrailerButton = styled(PlayButton)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);

  span {
    color: rgb(249, 249, 249);
  }
`;

const AddButton = styled.button``;

const GroupWatchButton = styled.button``;
