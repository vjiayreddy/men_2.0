import React from "react";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";

import {
  StyledImageBox,
  StyledMenCongImg,
  StyledVectorBadgeImg,
  StyledVectorMenuImg,
  StyledContentWrapper,
  StyledMainHeading,
  StyledCaption,
} from "./styled";

import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import StepComponent from "./Step";

const CongnitiveClothingContainer = () => {
  return (
    <ContainerWrapperComponent>
      <Grid container>
        <Grid container item xs={6} alignItems="center" justifyContent="center">
          <StyledImageBox>
            <StyledMenCongImg
              alt="asset-cognitive-ai-engine"
              src="./assets/cognitive.svg"
            ></StyledMenCongImg>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <StyledVectorBadgeImg
                alt="asset-badgeIcon"
                src="./assets/assets_badge.svg"
              ></StyledVectorBadgeImg>
            </Grow>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <StyledVectorMenuImg
                alt="asset-menu-icon"
                src="./assets/menu_lite_gray.svg"
              ></StyledVectorMenuImg>
            </Grow>
          </StyledImageBox>
        </Grid>
        <Grid item xs={6}>
          <StyledContentWrapper>
            <Box>
              <StyledMainHeading variant="h3">
                Cognitive Clothing AI Engine
              </StyledMainHeading>
            </Box>
            <Box>
              <StyledCaption variant="caption">
                Say goodbye to wondering what clothes you should buy. Our AI
                powered Cognitive Clothing Engine will help you discover your
                style and tell you exactly what looks suit you best. 3 steps -
                many looks. As easy as that.
              </StyledCaption>
            </Box>
            <Box sx={{ paddingTop: "33px" }}>
              <StepComponent step="STEP-1" lable="Describe your lifestyle." />
            </Box>
            <Box sx={{ paddingTop: "33px" }}>
              <StepComponent
                step="STEP-2"
                lable="Discover your style & your best looks."
              />
            </Box>
            <Box sx={{ paddingTop: "33px" }}>
              <StepComponent step="STEP-2" lable="Order." />
            </Box>
          </StyledContentWrapper>
        </Grid>
      </Grid>
    </ContainerWrapperComponent>
  );
};

export default CongnitiveClothingContainer;
