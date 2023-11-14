import styled from '@emotion/styled';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  width: 1100px;
  overflow: hidden;
  margin-top: 80px;
  height: 360px;
  @media only screen and (max-width: 480px) {
    width: 95vw;
  }
  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
  @media only screen and (max-width: 1280px) {
    width: 93vw;
  }
`;

export const Contents = styled.div`
  :hover {
    opacity: 0.7;
  }
  margin-top: 30px;
`;

export const PostTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-top: 8px;
`;

export const PostPrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
`;

export const PostWriter = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;
`;

export const PostImage = styled.img`
  margin-right: 6px;
  width: 270px;
  height: 175px;
  border-radius: 15px;
`;

export const StyledSlider = styled(Slider)`
  height: auto;
  width: auto;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 2%;
  z-index: 3;
`;

export const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 2%;
  z-index: 3;
`;

export const Btn = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #5c6ab8;
  height: 30px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 18px;
  }
`;
