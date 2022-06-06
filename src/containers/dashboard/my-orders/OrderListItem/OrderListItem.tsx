import React, { useState } from "react";
import Button from "@mui/material/Button";
import { blue, grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Collapse from "@mui/material/Collapse";
import OrderItemDetailsComponent from "./OrderItemDetails";
import moment from "moment";

const StyledMainBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: 20,
  marginBottom: 30,
}));

const StyledOrderListItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));
const StyledOrderItemLeftBox = styled(Box)(() => ({
  flexGrow: 1,
}));
const StyledOrderItemRightBox = styled(Box)(() => ({}));

const StyledOrderItemTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 600,
  display: "block",
}));
const StyledOrderItemContent = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  display: "block",
  marginTop: 15,
}));

const StyledInProgressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: 10,
}));

const StyledInProgressLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: 16,
}));

const StyledViewDetailsLink = styled(Button)(() => ({
  fontSize: 16,
  textDecoration: "underline",
  lineHeight: "21px",
  fontWeight: 400,
  color: blue.A100,
  textTransform: "none",
  padding: 0,
  marginTop: 30,
  marginBottom: 30,
}));
const StyledCancelButton = styled(Button)(({ theme }) => ({
  fontSize: 16,
  textDecoration: "underline",
  lineHeight: "21px",
  fontWeight: 400,
  color: grey[700],
  textTransform: "none",
  padding: 0,
  marginTop: 10,
}));
const StyledDateLabel = styled(Typography)(() => ({
  fontSize: 16,
  lineHeight: "21px",
  fontWeight: 700,
  textAlign: "right",
}));

interface OrderListItemComponentProps {
  orderData: any;
}

const OrderListItemComponent: React.FC<OrderListItemComponentProps> = ({
  orderData,
}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <StyledMainBox>
      <StyledOrderListItemBox>
        <StyledOrderItemLeftBox>
          <Box>
            <StyledOrderItemTitle variant="body1">
              ORD - {orderData.orderId}
            </StyledOrderItemTitle>
            {/* <StyledOrderItemContent variant="body2">
              Style 1 and Style 17
            </StyledOrderItemContent> */}
            <StyledInProgressContainer>
              <Box mr={3}>
                {orderData.status[0].name === "order_created" ? (
                  <>
                    <AccessTimeIcon sx={{ width: 16, marginTop: 2 }} />
                  </>
                ) : (
                  <>
                    <CheckCircleOutlineIcon
                      sx={{
                        width: 16,
                        marginTop: 2,
                        color: (theme) => theme.palette.success.main,
                      }}
                    />
                  </>
                )}
              </Box>
              <StyledInProgressLabel>
                {orderData.status[0].name === "order_created"
                  ? "In progress"
                  : "Delivered"}
              </StyledInProgressLabel>
            </StyledInProgressContainer>
            <Box>
              <StyledViewDetailsLink onClick={() => setIsCollapse(!isCollapse)}>
                View details
              </StyledViewDetailsLink>
            </Box>
          </Box>
        </StyledOrderItemLeftBox>
        <StyledOrderItemRightBox>
          <Box>
            <StyledDateLabel variant="body2">
              {moment(new Date(orderData.orderDateTime.timestamp).toUTCString())
                .utc()
                .format("MMM Do, YYYY")}
            </StyledDateLabel>
          </Box>
          <Box>
            {orderData.status === "Delivered" ? (
              <Button
                sx={{ marginTop: 20 }}
                id="btn-reorder"
                variant="contained"
              >
                Re Order
              </Button>
            ) : (
              <StyledCancelButton>Cancel order</StyledCancelButton>
            )}
          </Box>
        </StyledOrderItemRightBox>
      </StyledOrderListItemBox>
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <OrderItemDetailsComponent data={orderData} />
      </Collapse>
    </StyledMainBox>
  );
};
export default OrderListItemComponent;
