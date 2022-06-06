import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledGridContainer = styled(Grid)(() => ({
  marginTop: 50,
}));

const StyedImageBoxWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const StyedBarsLayer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 120,
  left: -50,
  zIndex: -1,
  [theme.breakpoints.down("sm")]: {
    left: 20,
  },
}));

const StyledImage = styled("img")(() => ({
  width: "80%",
}));
const StyledBarsImage = styled("img")(() => ({
  width: "80%",
}));

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 200,
  fontSize: 64,
  lineHeight: "60px",
  color: theme.palette.primary.main,
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    textAlign:'center',
    marginTop: 40,
    marginBottom: 10,
  }
}))
const StyledSectionContent = styled(Typography)(({ theme }) => ({
  fontWeight: 200,
  width: "50%",
  fontSize: 18,
  // fontSize: 64,
  lineHeight: "25px",
  [theme.breakpoints.down("sm")]: {
    textAlign:'center',
    width: "100%",
    paddingLeft:50,
    paddingRight:50,
    marginBottom: 100,
  }
}));

const MainSectionContainer = () => {
  return (
    <StyledGridContainer container alignItems="center" spacing={3}>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        lg={6}
        xl={6}
        sm={6}
      >
        <Grid item>
          <StyedImageBoxWrapper>
            <StyledImage loading="lazy" src="/assets/cognitive_2.png" />
            <StyedBarsLayer>
              <StyledBarsImage
                loading="lazy"
                alt="bars"
                src="/assets/bars.svg"
              />
            </StyedBarsLayer>
          </StyedImageBoxWrapper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6} sm={6}>
        <StyledSectionTitle>Men 2.0</StyledSectionTitle>
        <StyledSectionContent>
          Changing the way men dress. Revolutionize the way men shop.
        </StyledSectionContent>
      </Grid>
    </StyledGridContainer>
  );
};

export default MainSectionContainer;
