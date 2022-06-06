import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CartItemComponent from "./cartItem";
import Button from "@mui/material/Button";
import LoadingComponent from "../../components/library/Loading/LoadingIndex";
import FormButtonComponent from "../../components/library/Form/FormButton/FormButton";
import { useGetCartByUserId } from "../../apollo/actions/useGetCartByUserId";
import { useDeleteCartItem } from "../../apollo/actions/useDeleteCartItem";

import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../utils/enums";

export const StyledMainBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minHeight: 200,
}));

export const StyledStarusIndicationBox = styled(Box)(({ theme }) => ({
  minHeight: 200,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));

export const StyledCartListBox = styled(Box)(({ theme }) => ({
  fontSize: `36px !important`,
  width: 400,
  marginBottom: 100,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledDividerLine = styled(Box)(({ theme }) => ({
  height: 1,
  backgroundColor: theme.palette.grey[500],
}));

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: `36px !important`,
  paddingBottom: 20,
  [theme.breakpoints.down("sm")]: {
    fontSize: `30px !important`,
  },
}));

export const StyledCartContainer = styled(Box)(({ theme }) => ({
  paddingBottom: 20,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: 20,
}));

export const StyledCartButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px dotted ${theme.palette.grey[300]}`,
  width: "100%",
  paddingTop: 40,
}));

export const StyledContinueButton = styled(Button)(({ theme }) => ({
  width: 350,
}));

interface CartContainerProps {
  onContinue: () => void;
  cartLoading: boolean;
  cartItems: any[];
}

const CartContainer: React.FC<CartContainerProps> = ({
  onContinue,
  cartItems,
  cartLoading,
}) => {
  const { gqlRemoveItemsFromCart, RIFUCLoading } = useDeleteCartItem();

  return (
    <StyledMainBoxWrapper>
      {cartLoading ? (
        <StyledStarusIndicationBox>
          <LoadingComponent sx={{ position: "relative" }} />
        </StyledStarusIndicationBox>
      ) : (
        <>
          {cartItems.length > 0 ? (
            <>
              <StyledCartListBox>
                <StyledSectionTitle textAlign="center" variant="h3">
                  Your cart items
                </StyledSectionTitle>
                <StyledDividerLine />
                <StyledCartContainer>
                  {cartItems.map((item, index) => (
                    <CartItemComponent
                      divider={index !== cartItems.length - 1 ? true : false}
                      key={index}
                      onDelete={() => {
                        gqlRemoveItemsFromCart(item.productId)
                          .then((response) => {
                            alert("Delected cart item successfully");
                          })
                          .catch((error) => {
                            alert("Something went to wrong please try again");
                          });
                      }}
                      data={item}
                    />
                  ))}
                </StyledCartContainer>
              </StyledCartListBox>
              <StyledCartButtonWrapper>
                <FormButtonComponent
                  sx={{ borderRadius: 0, width: 350 }}
                  id="btn-continue"
                  label="Continue"
                  onClick={onContinue}
                />
              </StyledCartButtonWrapper>
            </>
          ) : (
            <StyledStarusIndicationBox>
              No Cart items found
            </StyledStarusIndicationBox>
          )}
        </>
      )}
    </StyledMainBoxWrapper>
  );
};

export default CartContainer;
