import React from "react";
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
        <AddButton>+</AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>2018 • 7m • Family, Fantasy, Kids, Animation</Subtitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
};

export default DetailsPage;
