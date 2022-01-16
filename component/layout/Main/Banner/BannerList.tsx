import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const BannerList: React.FC = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <Banner1 />
        <Banner2 />
        <Banner3 />
      </StyledSlider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 0;
  z-index: -1;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 300px;
  font-family: AmaticSCB;
`;

export default BannerList;
