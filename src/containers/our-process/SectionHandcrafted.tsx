import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  marginTop: 30,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
    marginTop: 0,
  },
}));

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.COLOR_5,
  fontSize: `85px !important`,
  lineHeight: "90px",
  paddingRight: 40,
  [theme.breakpoints.down("sm")]: {
    fontSize: `50px !important`,
    paddingRight: 25,
  },
}));

const StyledSectionImage = styled("img")(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
  },
}));
const StyledImageWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
     display:'flex',
     alignItems:'center',
     justifyContent:'center'
  },
}));

const SectionHandcrafted = () => {
  return (
    <StyledGridContainer container alignItems="center" spacing={3}>
      <Grid item md={8} lg={8} xl={8} xs={12} sm={6}>
        <StyledSectionTitle variant="h1">
          Made by masters. Handcrafted for you.
        </StyledSectionTitle>
      </Grid>
      <Grid item md={4} lg={4} xl={4} xs={12} sm={6}>
        <StyledImageWrapper>
          <StyledSectionImage
            alt="hand_crafted_2"
            src="/assets/hand_crafted_2.png"
          />
        </StyledImageWrapper>
      </Grid>
    </StyledGridContainer>
  );
};

export default SectionHandcrafted;
