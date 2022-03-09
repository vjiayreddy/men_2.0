import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Slider from "react-slick";
import Box from "@mui/material/Box";

import {
  StyledMainBoxWrapper,
  StyledCloseButton,
  StyledPreferredLookWrapper,
  StyledMyStyledLookWrapper,
  StyledAIFashionTitle,
  StyledCaptionTitle,
  StyledSliderHeader,
  StyledSliderTitle,
  StyledSliderBoxWrapper,
  StyledSliderCard,
  StyledMyStyledTitle,
  StyledViewLooksBtn,
  StyledAiEngineLooksView,
  StyledMyStyledCaption,
  StyledAiEngineViewTopIcon,
  StyledAiEngineSinalIndication,
} from "./styled";
import { Typography } from "@mui/material";

interface aiModelProps {
  onClose: () => void;
}

const sliderData = [
  {
    url: "./assets/slider_1.svg",
  },
  {
    url: "./assets/slider_2.svg",
  },
  {
    url: "./assets/slider_3.svg",
  },
  {
    url: "./assets/slider_4.svg",
  },
  {
    url: "./assets/slider_5.svg",
  },
  {
    url: "./assets/slider_6.svg",
  },
  {
    url: "./assets/slider_1.svg",
  },
  {
    url: "./assets/slider_2.svg",
  },
  {
    url: "./assets/slider_3.svg",
  },
  {
    url: "./assets/slider_4.svg",
  },
  {
    url: "./assets/slider_5.svg",
  },
  {
    url: "./assets/slider_6.svg",
  },
];

const AiFashionProfilerModule: React.FC<aiModelProps> = ({ onClose }) => {
  const sliderRef = useRef<any>();

  const handleSlikNext = (props: any) => {
    sliderRef.current.slickNext();
  };

  const handleSlikRight = (props: any) => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    adaptiveHeight: true,
  };

  return (
    <StyledMainBoxWrapper>
      <Grid container>
        <Grid item xs={7}>
          <StyledPreferredLookWrapper>
            <StyledAIFashionTitle variant="body1">
              AI Fashion Profiler
            </StyledAIFashionTitle>
            <Box sx={{ marginBottom: "15px" }}>
              <StyledCaptionTitle variant="caption">
                Find your personalised style by choosing your preferences below
              </StyledCaptionTitle>
            </Box>
            <Divider />
            <StyledSliderHeader>
              <StyledSliderTitle variant="body1">
                What is your preferred look?
              </StyledSliderTitle>
              <Box>
                <IconButton onClick={handleSlikNext}>
                  <img alt="assets-arrow-left" src="./assets/arrowLeft.svg" />
                </IconButton>
                <IconButton onClick={handleSlikRight}>
                  <img alt="assets-arrow-left" src="./assets/arrowRight.svg" />
                </IconButton>
              </Box>
            </StyledSliderHeader>
            <StyledSliderBoxWrapper>
              <Slider ref={sliderRef} {...settings}>
                {sliderData.map((item, index) => (
                  <StyledSliderCard
                    url={item.url}
                    key={index}
                    backgroundSize="cover"
                  ></StyledSliderCard>
                ))}
              </Slider>
            </StyledSliderBoxWrapper>
          </StyledPreferredLookWrapper>
        </Grid>
        <Grid item xs={5}>
          <StyledMyStyledLookWrapper>
            <Box sx={{ marginBottom: 10 }}>
              <StyledMyStyledTitle variant="subtitle2">
                My style
              </StyledMyStyledTitle>
              <StyledMyStyledCaption variant="caption">
                Choose your preferences to build your look
              </StyledMyStyledCaption>
            </Box>
            <StyledAiEngineLooksView>
              <img
                width={50}
                alt="assets-ai-singalicon"
                src="./assets/aiIcon.png"
              />
              <StyledAiEngineSinalIndication variant="caption">
                Our Cognitive Clothing AI Engine is building your style profile
              </StyledAiEngineSinalIndication>
              <StyledAiEngineViewTopIcon>
                <IconButton>
                  <img
                    alt="assets-adjust-icon"
                    src="./assets/adjustFrame.svg"
                  />
                </IconButton>
              </StyledAiEngineViewTopIcon>
            </StyledAiEngineLooksView>
            <StyledViewLooksBtn variant="contained">
              View my looks
            </StyledViewLooksBtn>
          </StyledMyStyledLookWrapper>
        </Grid>
      </Grid>
      <StyledCloseButton>
        <IconButton onClick={onClose} id="button-close">
          <img alt="assets-close-icon" src="./assets/closeicon.svg" />
        </IconButton>
      </StyledCloseButton>
    </StyledMainBoxWrapper>
  );
};

export default AiFashionProfilerModule;
