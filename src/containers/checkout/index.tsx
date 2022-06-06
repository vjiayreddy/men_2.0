import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DialogModelComponent from "../../components/library/DialogModel/DialogModel";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import { StripeCardElementOptions } from "@stripe/stripe-js";
import FormButtonComponent from "../../components/library/Form/FormButton/FormButton";
import Box from "@mui/material/Box";

// Apollo

import { useRouter } from "next/router";
import { useCreateProductOrder } from "../../apollo/actions/useCreateProductOrder";
import { useClearUserCartItems } from "../../apollo/actions/useClearCartItems";
import { ROUTES } from "../../config/routes/routes";

type addressType = {
  name: string;
  email: string;
  address: {
    city: string;
    line1: string;
    state: string;
    postal_code: string;
  };
};

interface StripeCheckoutFormProps {
  total: number;
  address: addressType;
}

const StyledPaymentCardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  padding: 30,
  border: `1px solid ${theme.palette.grey[300]}`,
  marginBottom: 30,
}));

const StyledAlertContainer = styled(Box)(() => ({
  width: 300,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const StyledAlertTitle = styled(Typography)(() => ({
  fontWeight: 700,
}));
const StyledAlertMessage = styled(Typography)(() => ({
  textAlign: "center",
  width: "80%",
  marginBottom: 30,
}));

const StripeCheckoutForm: React.FC<StripeCheckoutFormProps> = ({
  total,
  address,
}) => {
  const CARD_OPTIONS: StripeCardElementOptions = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        //iconColor: "#c4f0ff",
        //color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        // iconColor: "#ffc7ee",
        //color: "#ffc7ee",
      },
    },
  };

  const { gqlClearUserCartItems } = useClearUserCartItems();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertType, setAlertType] = useState<string>(null);
  const [alertMessage, setAlertMessage] = useState<string>(null);
  const [openAlert, setOpenAlert] = useState(false);

  const [isProcessing, setProcessingTo] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { gqlCreateProductOrder, CPRLoading } = useCreateProductOrder();

  const handleCardDetailsChange = (event) => {
    event.error
      ? setAlertMessage(event.error.message)
      : setAlertMessage(null);
  };

  const handleFormSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    setProcessingTo(true);
    const cardElement = elements.getElement("card");
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: address,
      });
      if (!error) {
        gqlCreateProductOrder({
          addressId: router.query.addressId as string,
          description: "",
          currency: "usd",
          paymentMethodId: paymentMethod.id,
        })
          .then(({ createProductOrder }) => {
            setProcessingTo(false);
            setAlertType("Success");
            setAlertMessage(
              `Thank You Order(${createProductOrder.prefix}${createProductOrder.orderNo}) Successfully Placed.`
            );
            setOpenAlert(true);
          })
          .catch(() => {
            setProcessingTo(false);
            setAlertType("Server Error");
            setAlertMessage("Order placing failed.");
            setShowErrorAlert(true);
          });
      } else {
        setProcessingTo(false);
        setAlertType("Payment Failed");
        setAlertMessage(error.message);
        setShowErrorAlert(true);
      }
    } catch (err) {
      setProcessingTo(false);
      setAlertType("Payment Failed");
      setAlertMessage(err.message);
      setShowErrorAlert(true);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaymentCardBox>
            <CardElement
              options={CARD_OPTIONS}
              onChange={handleCardDetailsChange}
            />
          </StyledPaymentCardBox>
        </Grid>

        <Grid
          alignItems="center"
          justifyContent="center"
          item
          container
          xs={12}
        >
          <Grid item>
            <FormButtonComponent
              id="check-out-button"
              label={`Pay $${total}`}
              sx={{
                borderRadius: 0,
                width: {
                  xs: 326,
                  sm: 350,
                  md: 350,
                  lg: 350,
                  xl: 350,
                },
              }}
              onClick={() => {
                handleFormSubmit();
              }}
              loading={isProcessing || !stripe || CPRLoading}
              circularProgressProps={{
                size: 16,
                sx: { color: (theme) => theme.palette.common.white },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <DialogModelComponent
        onClose={() => {
          return;
        }}
        content={
          <StyledAlertContainer>
            <CheckCircleOutlineIcon sx={{ fontSize: 120 }} color={"success"} />
            <StyledAlertTitle variant="h6">{alertType}</StyledAlertTitle>

            <StyledAlertMessage>{alertMessage}</StyledAlertMessage>
            <FormButtonComponent
              size="small"
              id="try-again-button"
              sx={{ width: 150, borderRadius: 0 }}
              onClick={() => {
                gqlClearUserCartItems()
                  .then(() => {
                    setOpenAlert(false);
                    router.push({
                      pathname: ROUTES.DASHBOARD,
                      query: {
                        mode: `my-orders`,
                      },
                    });
                  })
                  .catch(() => {
                    setOpenAlert(false);
                  });
              }}
              label={"Continue"}
            />
          </StyledAlertContainer>
        }
        title={null}
        open={openAlert}
      />
      <DialogModelComponent
        onClose={() => {
          return;
        }}
        content={
          <StyledAlertContainer>
            <ErrorIcon sx={{ fontSize: 120 }} color={"error"} />
            <StyledAlertTitle variant="h6">{alertType}</StyledAlertTitle>

            <StyledAlertMessage>{alertMessage}</StyledAlertMessage>
            <FormButtonComponent
              size="small"
              id="try-again-button"
              sx={{ width: 150, borderRadius: 0 }}
              onClick={() => {
                setShowErrorAlert(false);
              }}
              label={"Try again"}
            />
          </StyledAlertContainer>
        }
        title={null}
        open={showErrorAlert}
      />
    </>
  );
};

export default StripeCheckoutForm;
