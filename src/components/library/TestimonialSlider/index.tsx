import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";

import ContainerWrapperComponent from "../ContainerWrapper/ContainerWrapperIndex";
import TestimonialCard from "./TestimonialCard";
import { TestimonialMainBox } from "./styled";
import { testimonialData } from "../../../utils/mockData";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "30px",
      },
    },
  ],
};

const TestimonialSliderComponent = () => {
  return (
    <ContainerWrapperComponent>
      <TestimonialMainBox>
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <Box key={index}>
              <TestimonialCard cardData={item} />
            </Box>
          ))}
        </Slider>
      </TestimonialMainBox>
    </ContainerWrapperComponent>
  );
};

export default TestimonialSliderComponent;
