import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import moment from "moment";

const StyledOrderItemDetailsBox = styled(Box)(({ theme }) => ({
  padding: 30,
  backgroundColor: theme.palette.grey[200],
}));
const StyledOrderItemDetailsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "21.0px",
  display: "block",
  marginBottom: 30,
}));

const StyledOrderItemSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: "24.0px",
  display: "block",
}));
const StyledOrderItemInfo = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 300,
  lineHeight: "19.0px",
  display: "block",
  paddingBottom: 50,
}));

const StyledOrderProcessStatus = styled(Box)(({ theme }) => ({
  height: 47,
  width: "100%",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[300]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

interface OrderItemDetailsComponentProps {
  data: any;
}

const OrderItemDetailsComponent: React.FC<OrderItemDetailsComponentProps> = ({
  data,
}) => {
  return (
    <StyledOrderItemDetailsBox>
      <Grid container>
        <Grid item xs={12}>
          <StyledOrderItemDetailsTitle variant="body2">
           ORD-{data.orderId}
          </StyledOrderItemDetailsTitle>
        </Grid>
        <Grid item md={4}>
          <StyledOrderItemSubTitle variant="body2">
            Pickup address
          </StyledOrderItemSubTitle>
        </Grid>
        <Grid item md={8} lg={8} xl={8}>
          <StyledOrderItemInfo>
            {`${data.address?.address1},${data.address.city},${data.address.country},${data.address.landmark},${data.address.postalCode}`}
          </StyledOrderItemInfo>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>
          <StyledOrderItemSubTitle variant="body2">
            Pickup date & time
          </StyledOrderItemSubTitle>
        </Grid>
        <Grid item md={8} lg={8} xl={8}>
          <StyledOrderItemInfo>-</StyledOrderItemInfo>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>
          <StyledOrderItemSubTitle variant="body2">
            Delivery date & time
          </StyledOrderItemSubTitle>
        </Grid>
        <Grid item md={8} lg={8} xl={8}>
          <StyledOrderItemInfo>-</StyledOrderItemInfo>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>
          <StyledOrderItemSubTitle variant="body2">
            Status
          </StyledOrderItemSubTitle>
        </Grid>
        <Grid item md={8} lg={8} xl={8}>
          <StyledOrderItemInfo>In progress</StyledOrderItemInfo>
        </Grid>
      </Grid>
      <StyledOrderProcessStatus>
        Order is not processed yet!
      </StyledOrderProcessStatus>
    </StyledOrderItemDetailsBox>
  );
};

export default OrderItemDetailsComponent;
