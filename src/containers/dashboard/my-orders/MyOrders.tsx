import React from "react";
import { StyledOrderMainBox } from "./styled";
import OrderListItemComponent from "./OrderListItem/OrderListItem";
import { useGetOrdersByUserId } from "../../../apollo/actions/useGetOrdersByUserId";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../../utils/enums";

type orderItem = {
  orderId: string;
  status: string;
};

const orderItem: orderItem[] = [
  {
    orderId: "326598",
    status: "In progress",
  },
  {
    orderId: "326454",
    status: "Completed",
  },
  {
    orderId: "326598",
    status: "Delivered",
  },
];

const MyOrdersContainer = () => {
  const { status } = useSession();
  const { gqlGetProductOrders, orders, POBUDLoading } = useGetOrdersByUserId();
  React.useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      gqlGetProductOrders()
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [status]);

  return (
    <StyledOrderMainBox>
      {POBUDLoading ? (
        <>Loading..</>
      ) : (
        <>
          {orders && (
            <>
              {orders.map((item) => (
                <OrderListItemComponent key={item._id} orderData={item} />
              ))}
            </>
          )}
        </>
      )}
    </StyledOrderMainBox>
  );
};

export default MyOrdersContainer;
