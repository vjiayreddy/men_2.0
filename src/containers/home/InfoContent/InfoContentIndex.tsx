import React from "react";
import {
  StyledInfoContentTypography,
  StyledSpanLabel,
  StyledContainerBoxWrapper,
} from "./styled";

const InfoContentContainer = () => {
  return (
 
      <StyledContainerBoxWrapper>
        <StyledInfoContentTypography variant="h4">
          Fashion changes slowly but surely. For busy men like you, staying on
          top of the game means investing time, finding the right outlet and
          buying into their vision of how you should dress. Want something
          personalized? No luck. That &apos; s where we come in.
          <StyledSpanLabel>
            {" "}
            Welcome to MEN 2.0. The AI powered menswear revolution has begun.
          </StyledSpanLabel>
        </StyledInfoContentTypography>
      </StyledContainerBoxWrapper>
   
  );
};

export default InfoContentContainer;
