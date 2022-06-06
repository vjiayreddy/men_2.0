import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import {
  StyledActionsBoxWrapper,
  StyledDividerVertical,
  StyledLabelButtonWrapper,
  StyledPriceLabel,
} from "./styled";

interface LooksPriceBoxProps {
  onClick: () => void;
  price: number;
}

const LooksPriceBoxComponent: React.FC<LooksPriceBoxProps> = ({
  onClick,
  price,
}) => {
  return (
    <StyledActionsBoxWrapper>
      {/* <StyledLabelButtonWrapper>
        <StyledPriceLabel variant="body1">${price}</StyledPriceLabel>
        <Box sx={{ marginBottom: 2 }}>
          <Button
            //onClick={onBuyLook}
            id="btn-buy-looks"
            size="small"
            variant="outlined"
          >
            Buy this look
          </Button>
        </Box>
      </StyledLabelButtonWrapper> */}

      {/* <StyledDividerVertical /> */}
      <StyledLabelButtonWrapper>
        <StyledPriceLabel variant="body1">$ {price}</StyledPriceLabel>
        <Box sx={{ marginBottom: 2 }}>
          <Button onClick={onClick} size="small" variant="contained">
            Buy this look
          </Button>
        </Box>
      </StyledLabelButtonWrapper>
    </StyledActionsBoxWrapper>
  );
};

export default LooksPriceBoxComponent;
