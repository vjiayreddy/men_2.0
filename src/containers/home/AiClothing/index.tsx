import React from "react";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";

import {
  StyledBoxWithGradent,
  StyledImageBox,
  StyledBg2Box,
  Styled2VectorImg,
  StyledMenAiImg,
  StyledVectorMImg,
  StyledMainTypography,
  StyledSpanTitle,
  StyledCaptionTypography,
  StyledVerticalTypography,
  StyledVerticalTypographyWrapper,
} from "./styled";

import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import ArrowLinkComponent from "../../../components/library/ArrowLink/ArrowLinkIndex";

const AiClothingContainer = () => {
  return (
    <ContainerWrapperComponent>
      <StyledBoxWithGradent>
        <Grid
          sx={{ minHeight: 441 }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={7}>
            <StyledMainTypography variant="h3">
              The AI clothing engine for the
              <StyledSpanTitle> modern man</StyledSpanTitle>.
            </StyledMainTypography>
            <Box sx={{ marginTop: "29px" }}>
              <StyledCaptionTypography variant="caption">
                Discover your style and uncover your looks. Start now.
              </StyledCaptionTypography>
            </Box>
            <Box sx={{ paddingTop: "10px", width: "75%" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <ArrowLinkComponent label="Business leaders" href="/" />
                </Grid>
                <Grid item>
                  <ArrowLinkComponent label="Executives" href="/" />
                </Grid>
                <Grid item>
                  <ArrowLinkComponent label="Grooms" href="/" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <StyledImageBox>
              <StyledMenAiImg alt="asset-men-ai" src="./assets/men_ai.svg" />
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <StyledBg2Box>
                  <Styled2VectorImg alt="asset-vector-2" src="./assets/2.svg" />
                </StyledBg2Box>
              </Grow>
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <StyledVectorMImg
                  alt="asset-vector-m"
                  src="./assets/m.svg"
                ></StyledVectorMImg>
              </Grow>
            </StyledImageBox>
          </Grid>
        </Grid>
        <StyledVerticalTypographyWrapper>
          <StyledVerticalTypography variant="caption">
            BUILT BY MEN. FOR MEN.
          </StyledVerticalTypography>
        </StyledVerticalTypographyWrapper>
      </StyledBoxWithGradent>
    </ContainerWrapperComponent>
  );
};

export default AiClothingContainer;
