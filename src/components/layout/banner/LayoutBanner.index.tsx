import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, Wrapper } from './LayoutBanner.styles';
import React from 'react';
export default function LayoutBanner(): JSX.Element  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderWrapper>
          지금
          <br /> 당신의 코치를 🏃‍♀️
          <br />
          찾아보세요!
        </SliderWrapper>

        <SliderWrapper>
          지금
          <br /> 가입하시면 <br />
          25% 할인! 🎉
        </SliderWrapper>
        <SliderWrapper>
          여러분들을
          <br /> 기다리고 있습니다 :)
          <br />
          😀
        </SliderWrapper>
      </Slider>
    </Wrapper>
  );
}
