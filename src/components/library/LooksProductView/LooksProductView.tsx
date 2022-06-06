import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import useElementSize from "../../../utils/useElementSize";

interface ImageProps {
  height?: number;
  width?: number;
}
interface LooksProductViewProps {
  product: any;
}

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledProductImage = styled("img")<ImageProps>(
  ({ theme, height, width }) => ({
    width: width / 2.8,
    height: height,
    [theme.breakpoints.down("sm")]: {
      width: width / 2.4,
    },
  })
);

const LooksProductView: React.FC<LooksProductViewProps> = ({ product }) => {
  const [squareRef, { height, width }] = useElementSize();
  return (
    <StyledBoxWrapper ref={squareRef}>
      <StyledProductImage
        width={width}
        alt="assest-ai-profile"
        src={product?.image}
      />
    </StyledBoxWrapper>
  );
};

export default LooksProductView;
