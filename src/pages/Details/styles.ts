import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: inherit;

  padding: 5em 4em;
`;

export const Background = styled.div`
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

export const ImageTitle = styled.div`
  min-width: 225px;
  max-width: 27vw;
  margin-bottom: 3vh;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50vw;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;

  padding: 0.3em 0.8em;
  margin: 0.5rem;

  background-color: white;

  border: none;
  border-radius: 3px;

  height: 6vh;
  width: auto;

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
    height: 8vh;
  }

  @media (max-height: 600px) {
    height: 8vh;
  }

  @media (max-height: 400px) {
    height: 10vh;
  }
`;

export const TrailerButton = styled(PlayButton)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);

  span {
    color: rgb(249, 249, 249);
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  height: 6vh;
  width: auto;

  font-size: 1.5rem;

  padding: 0.7em;
  margin: 0.5rem;

  border: 1px solid white;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0.6);
  color: white;

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    height: 8vh;
    width: 15vw;
  }
`;

export const GroupWatchButton = styled(AddButton)``;

export const Subtitle = styled.div`
  margin: 1em 0;
  font-size: 0.9rem;
`;

export const Description = styled.div`
  width: 100%;
  max-width: 1024px;

  line-height: 1.4;
  font-size: 1.2rem;
`;
