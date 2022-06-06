import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
// Apollo
import {
  useSaveAddress,
  UserAddressType,
} from "../../src/apollo/actions/useSaveAddress";
import { useGetCartByUserId } from "../../src/apollo/actions/useGetCartByUserId";

// Components
import AddressForm from "../../src/features/AddressForm/AddressForm";
import StepperComponent from "../../src/components/library/Stepper/StepperIndex";
import CartContainer from "../../src/containers/cart";
import StripeCheckoutForm from "../../src/containers/checkout";
import { AUTH_STATE } from "../../src/utils/enums";

export const StyledCardBox = styled(Box)(({ theme }) => ({
  marginLeft: 181,
  marginRight: 181,
  backgroundColor: theme.palette.COLOR_1,
  padding: 40,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0,
    padding: `20px 20px`,
  },
}));

export const StyledStepperWrapper = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0px",
    marginBottom: 20,
  },
}));

const CartPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const { saveUserAddress, SUALoading } = useSaveAddress();
  const [stepperIndex, setStepperIndex] = React.useState<number>(0);
  const { cartItems, cartLoading, gqlGetCartByUserId, cartTotal } =
    useGetCartByUserId();
  const handleSubmitForm = (payload: UserAddressType) => {
    saveUserAddress(payload)
      .then(({ createUserAddress }) => {
        setStepperIndex(2);
        router.push(
          {
            pathname: router.pathname,
            query: { addressId: createUserAddress._id },
          },
          undefined,
          { shallow: true }
        );
      })
      .catch((error) => {
        console.log("Something went to wrong please try again...");
      });
  };
  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      gqlGetCartByUserId();
    }
  }, [status]);

  return (
    <>
      <StyledStepperWrapper>
        <StepperComponent stepperIndex={stepperIndex} />
      </StyledStepperWrapper>
      <StyledCardBox>
        {stepperIndex === 0 && (
          <CartContainer
            cartLoading={cartLoading}
            cartItems={cartItems}
            onContinue={() => {
              setStepperIndex(1);
            }}
          />
        )}
        {stepperIndex === 1 && (
          <AddressForm loading={SUALoading} onContinue={handleSubmitForm} />
        )}
        {stepperIndex === 2 && (
          <Elements stripe={stripePromise}>
            <StripeCheckoutForm address={null} total={cartTotal} />
          </Elements>
        )}
      </StyledCardBox>
    </>
  );
};

export default CartPage;
