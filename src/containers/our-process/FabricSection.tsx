import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledMainBox = styled(Box)(({ theme }) => ({
  paddingTop: 70,
  paddingBottom: 70,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

const StyledSectionTitle = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: 32,
  lineHeight: "60px",
}));
const StyledSectionContent = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 20,
  lineHeight: "32px",
  margin: "0 auto",
  width: "68%",
  marginBottom: 35,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "justify",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    lineHeight: "24px",
  },
}));

const StyledFabricImagesGrid = styled(Box)(({theme}) => ({
  width: "60%",
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const StyledFabricCardWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const StyledFabricImage = styled("img")(() => ({
  width: "90%",
  marginBottom: 10,
}));
const StyledFabricImageLabel = styled(Typography)(() => ({
  textAlign: "center",
  fontWeight: 400,
}));

interface FabricCardProps {
  imageUrl: string;
  imageLbl: string;
}

const FabricCard: React.FC<FabricCardProps> = ({ imageUrl, imageLbl }) => {
  return (
    <StyledFabricCardWrapper>
      <StyledFabricImage loading="lazy" alt={imageLbl} src={imageUrl} />
      <StyledFabricImageLabel>{imageLbl}</StyledFabricImageLabel>
    </StyledFabricCardWrapper>
  );
};

const FabricSection = () => {
  return (
    <StyledMainBox>
      <StyledSectionTitle>Our fabrics</StyledSectionTitle>
      <StyledSectionContent>
        We’re a menswear company like no other. We’ve made every effort to make
        sure you got from point A to the best-fitting clothes you’ve ever worn
        with ease, because finding your fit should never be unpleasant.
      </StyledSectionContent>
      <StyledFabricImagesGrid>
        <FabricCard imageUrl="/assets/fabric_1.png" imageLbl="Giza cotton" />
        <FabricCard imageUrl="/assets/fabric_2.png" imageLbl="Giza cotton" />
        <FabricCard imageUrl="/assets/fabric_3.png" imageLbl="Giza cotton" />
      </StyledFabricImagesGrid>
    </StyledMainBox>
  );
};

export default FabricSection;
