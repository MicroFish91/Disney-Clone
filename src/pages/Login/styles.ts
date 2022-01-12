import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  min-height: inherit;

  &:before {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    content: "";
    z-index: -1;

    opacity: 0.7;

    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 75%;
  max-width: 650px;
`;

export const LogoOne = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SignUp = styled.a`
  cursor: pointer;
  width: 100%;

  margin: 1rem 0;
  padding: 0.7em 0;
  border-radius: 6px;

  background-color: #0063e5;

  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;

  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: center;
`;

export const LogoTwo = styled.img`
  margin: 0.5rem 0;
`;
