import React from "react";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";

import {
  StyledBoxWrapper,
  StyledImageBox,
  StyledMenCongImg,
  StyledVectorBadgeImg,
  StyledVectorMenuImg,
  StyledContentWrapper,
  StyledMainHeading,
  StyledCaption,
} from "./styled";

import StepComponent from "./Step";
import Image from "next/dist/client/image";

const CongnitiveClothingContainer = () => {
  return (
    <StyledBoxWrapper>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={6}
          lg={6}
          xl={6}
          alignItems="center"
          justifyContent="center"
        >
          <StyledImageBox>
            <Hidden only={["xs"]}>
              <StyledMenCongImg
                alt="asset-cognitive-ai-engine"
                src="/assets/cognitive.svg"
              ></StyledMenCongImg>
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <Image
                alt="asset-ai-cognitive-mobile"
                src="/assets/mobile-cognitive.svg"
                layout="intrinsic"
                quality={100}
                width={"342.12px"}
                height={308.93}
              ></Image>
            </Hidden>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <StyledVectorBadgeImg
                alt="asset-badgeIcon"
                src="/assets/assets_badge.svg"
              ></StyledVectorBadgeImg>
            </Grow>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <StyledVectorMenuImg
                alt="asset-menu-icon"
                src="/assets/menu_lite_gray.svg"
              ></StyledVectorMenuImg>
            </Grow>
          </StyledImageBox>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <StyledContentWrapper>
            <Hidden only={["xs"]}>
              <Box>
                <StyledMainHeading variant="h3">
                  The menswear revolution is here
                </StyledMainHeading>
              </Box>
              <Box>
                <StyledCaption variant="caption">
                  If you’ve ever walked into a store, and seen the hundreds of
                  options on display only to leave with nothing purchased,
                  you’re not alone. With Men 2.0, you will never again spend an
                  hour in the joyless trial rooms of main street stores.
                </StyledCaption>
              </Box>
            </Hidden>
            <Box sx={{ paddingTop: "33px" }}>
              <StepComponent
                step="Driven by your lifestyle"
                lable="Our AI tool draws upon your life to find the right apparel
"
              />
            </Box>
            <Box sx={{ paddingTop: "33px" }}>
              <Hidden only={["xs"]}>
                <StepComponent
                  step="Simple visual cues"
                  lable="Discover your style & your best looks"
                />
              </Hidden>
            </Box>
            <Box sx={{ paddingTop: "33px" }}>
              <StepComponent
                step="Made for a perfect fit"
                lable="Your look is handmade with the best fabrics by 
                    master craftsmen"
              />
            </Box>
          </StyledContentWrapper>
        </Grid>
      </Grid>
    </StyledBoxWrapper>
  );
};

export default CongnitiveClothingContainer;
