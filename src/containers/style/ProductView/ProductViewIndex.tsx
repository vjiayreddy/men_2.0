import React, { useRef } from "react";
import {
  StyledProductContainerWrapper,
  StyledProductView,
  StyledMyNewStyleBoxWrapper,
  StyledAddCartWrapper,
  StyledBackgroundCircle,
  StyledProductImage,
} from "./style";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import MyNewStyleContainer from "../MyNewStyle/MyNewStyleIndex";
import AddToCartContainer from "../AddToCart/AddToCart";
import useElementSize from "../../../utils/useElementSize";

interface productViewContainerProps {
  showCart?: boolean;
}

const ProductViewContainer: React.FC<productViewContainerProps> = ({
  showCart,
}) => {
  const [isShowCart, setIsShowCard] = React.useState<boolean>(false);
  const [squareRef, { height }] = useElementSize();

  React.useEffect(() => {
    setIsShowCard(showCart);
  }, [showCart]);

  return (
    <StyledProductContainerWrapper>
      <ContainerWrapperComponent sx={{ flexGrow: 1, height: "100%" }}>
        <StyledProductView ref={squareRef}>
          <StyledProductImage
            width={height}
            alt="assest-ai-profile"
            src="/assets/ai-profile.svg"
          />
          <StyledMyNewStyleBoxWrapper>
            <MyNewStyleContainer />
          </StyledMyNewStyleBoxWrapper>
          {isShowCart && (
            <StyledAddCartWrapper>
              <AddToCartContainer
                onAddCart={() => {
                  setIsShowCard(!isShowCart);
                }}
                onCustomize={() => {}}
              />
            </StyledAddCartWrapper>
          )}

          <StyledBackgroundCircle
            height={height}
            width={height}
          ></StyledBackgroundCircle>
        </StyledProductView>
      </ContainerWrapperComponent>
    </StyledProductContainerWrapper>
  );
};

export default ProductViewContainer;
