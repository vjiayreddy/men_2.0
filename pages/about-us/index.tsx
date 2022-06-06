import React from "react";
import Box from "@mui/material/Box";
import MainSectionContainer from "../../src/containers/aboutus/MainSection";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
const StyledInfo = styled(Typography)(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 100,
  paddingLeft: 70,
  paddingRight: 70,
  lineHeight: "32.74px",
  fontWeight: 200,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: "19px",
    textAlign:"Justify"
  },
}));

const AboutUsPage = () => {
  return (
    <Box>
      <MainSectionContainer />
      <Box>
        <StyledInfo variant="h6">
          Your distinct personality and unique perspective are subtly expressed
          through your personal styling decisions. Your clothes tell the story
          of who you are and introduce you to the world in a way you decide.
          <br />
          <br />
          At Men 2.0, we are passionate about providing men like you the freedom
          to explore your style in your own unique way through our AI Cognitive
          Clothing engine. We are image consultants using cognitive science to
          guide customers like you through making the perfect choice of clothing
          that fits your lifestyle, personality, and body shape.
          <br />
          <br />
          Unlike off-the-shelf clothing that only addresses the superficial part
          of men’s needs, our holistic approach to men’s style goes beyond your
          physical attributes. We pay attention to essential details that define
          your life such as – the place you live, the climate, your pace of
          life, activities you love, the role you play in society, your
          profession, and dozens of other factors in creating your personalized
          looks.
          <br />
          <br />
          practices bring the best of both worlds to your fingertips. We’ve made
          it super easy for you to find your style, identify your fit and get
          your clothes right at your doorstep.
          <br />
          <br />
          So go ahead and give us a try. Like thousands of others, we promise to
          make a believer out of you too.
        </StyledInfo>
      </Box>
    </Box>
  );
};
export default AboutUsPage;
