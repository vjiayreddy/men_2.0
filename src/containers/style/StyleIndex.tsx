import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import ProductViewContainer from "./ProductView/ProductViewIndex";
import ThumbnailContainer from "./ThumbnailView/ThumbnailViewIndex";
import { useSession } from "next-auth/react";
import { useGetRecommendedLooks } from "../../config/apollo/actions/useGetRecommendedLooks";

const StyledBoxWrapper = styled(Box)(({}) => ({
  height: `calc(100vh - 84.36px)`,
  display: "flex",
  flexDirection: "column",
}));

export const NewStyleContainer = () => {
  const [isShowCart, setIsShowCart] = React.useState<boolean>(false);
  return (
    <StyledBoxWrapper>
      <ProductViewContainer showCart={isShowCart} />
      <ThumbnailContainer onBuyLook={() => setIsShowCart(!isShowCart)} />
    </StyledBoxWrapper>
  );
};

export default NewStyleContainer;
