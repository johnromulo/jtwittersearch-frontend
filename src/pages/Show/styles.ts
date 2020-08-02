import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TweetListContainer = styled.div`
  width: 100%;
`;

export const TweetList = styled(Carousel).attrs({
  responsive: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 1,
    },
    desktopMedium: {
      breakpoint: { max: 1440, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  },
})`
  /* .react-multiple-carousel__arrow--right {
    right: calc(0.5% + 1px);
    top: calc(50% + 2px);
  }

  .react-multiple-carousel__arrow--left {
    left: calc(0.5% + 1px);
    top: calc(50% + 2px);
  } */

  /* .react-multiple-carousel__arrow {
    background: rgba(255, 122, 64, 0.5);
  }

  .react-multiple-carousel__arrow:hover {
    background: rgba(255, 122, 64, 0.8);
  } */
`;

export const TweetItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
