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
  StyledAiProfileDialog,
  StyledAiProfileDialogContainer,
} from "./styled";

import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import ArrowLinkComponent from "../../../components/library/ArrowLink/ArrowLinkIndex";
import AiFashionProfilerModule from "../../../modules/AiFashionProfiler/AiFashionProfilerIndex";

const AiClothingContainer = () => {
  const [open, setOpen] = React.useState<boolean>(false);
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
                  <ArrowLinkComponent
                    onClick={() => {
                      setOpen(true);
                    }}
                    label="Business leaders"
                  />
                </Grid>
                <Grid item>
                  <ArrowLinkComponent label="Executives" />
                </Grid>
                <Grid item>
                  <ArrowLinkComponent label="Grooms" />
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
      <StyledAiProfileDialog
        fullWidth
        maxWidth={false}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <StyledAiProfileDialogContainer>
          <AiFashionProfilerModule
            onClose={() => {
              setOpen(false);
            }}
          />
        </StyledAiProfileDialogContainer>
      </StyledAiProfileDialog>
    </ContainerWrapperComponent>
  );
};

export default AiClothingContainer;
