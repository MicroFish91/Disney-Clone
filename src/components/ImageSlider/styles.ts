import Slider from "react-slick";
import styled from "styled-components";

export const Carousel = styled(Slider)`
  padding: 0 3em;

  .slick-dots li button:before {
    font-size: 0.5rem;
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
`;

export const Wrap = styled.div`
  img {
    width: 100%;
    border: 3px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 350ms;

    &:hover {
      cursor: pointer;
      border: 3px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
