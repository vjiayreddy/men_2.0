import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

export const StyledAddToCartWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: `20px 20px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledProductLabel = styled(Typography)(({ theme }) => ({
  fontSize: `25px !important`,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: 21,
  },
}));

export const StyledProductPriceLabel = styled("span")(({ theme }) => ({
  marginLeft: 15,
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

interface addToCardProps {
  onAddCart: () => void;
  onCustomize: () => void;
}

const AddToCartContainer: React.FC<addToCardProps> = ({
  onAddCart,
  onCustomize,
}) => {
  return (
    <StyledAddToCartWrapper>
      <StyledProductLabel variant="h4">
        White shirt <StyledProductPriceLabel>$99</StyledProductPriceLabel>
      </StyledProductLabel>
      <Box sx={{ marginTop: 10 }}>
        <Button
          onClick={onAddCart}
          id="button-add-to-cart"
          variant="contained"
          size="small"
        >
          ADD TO CART
        </Button>
        <Button
          id="button-customize"
          onClick={onCustomize}
          sx={{ marginLeft: 10 }}
          variant="outlined"
          size="small"
        >
          CUSTOMIZE
        </Button>
      </Box>
    </StyledAddToCartWrapper>
  );
};

export default AddToCartContainer;
