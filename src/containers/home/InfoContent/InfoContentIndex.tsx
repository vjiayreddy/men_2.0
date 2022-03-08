import React from "react";
import Typography from "@mui/material/Typography";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import { StyledInfoContentTypography, StyledSpanLabel } from "./styled";

const InfoContentContainer = () => {
  return (
    <ContainerWrapperComponent>
      <StyledInfoContentTypography variant="h4">
        Fashion changes slowly but surely. For busy men like you, staying on top
        of the game means investing time, finding the right outlet and buying
        into their vision of how you should dress. Want something personalized?
        No luck. That's where we come in.
        <StyledSpanLabel>
          {" "}
          Welcome to MEN 2.0. The AI powered menswear revolution has begun.
        </StyledSpanLabel>
      </StyledInfoContentTypography>
    </ContainerWrapperComponent>
  );
};

export default InfoContentContainer;
