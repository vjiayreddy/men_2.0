import { AUTH_STATE } from "./../../utils/enums";
import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { cartItemType } from "./useAddItemsToCart";
import _ from "lodash";

export interface GetCartByUserIdParams {
  userId: string;
}

export interface GetCartByUserIdPayload extends cartItemType {
  totalItemDiscountedPrice: number;
  totalItemPrice: number;
}

export const USE_GET_CARTITEM_BY_USERID = gql`
  query getCartByUserId($userId: String!) {
    getCartByUserId(userId: $userId) {
      orderId
      totalPrice
      items {
        discount
        discountType
        lookId
        lookName
        price
        product {
          title
          name
          images
        }
        productId
        quantity
        totalItemDiscountedPrice
        totalItemPrice
      }
    }
  }
`;

export const useGetCartByUserId = () => {
  const { data: session, status } = useSession();

  const [cartTotal, setCartTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState<
    GetCartByUserIdPayload[] | null | undefined
  >([]);
  const [
    getCartByUserId,
    { data: UGCBData, loading: cartLoading, error: UGCBError },
  ] = useLazyQuery<
    {
      getCartByUserId: GetCartByUserIdPayload[];
    },
    {
      userId: GetCartByUserIdParams;
    }
  >(USE_GET_CARTITEM_BY_USERID, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  const gqlGetCartByUserId = async () => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      await getCartByUserId({
        variables: {
          userId: session?.user["_id"],
        },
      });
    }
  };

  React.useEffect(() => {
    if (!_.isEmpty(UGCBData)) {
      const { getCartByUserId } = UGCBData;
      if (!_.isEmpty(getCartByUserId?.["items"])) {
        setCartTotal(getCartByUserId["totalPrice"]);
        setCartItems(getCartByUserId["items"]);
      } else {
        setCartItems([]);
      }
    }
  }, [UGCBData]);

  return {
    gqlGetCartByUserId,
    cartItems,
    cartLoading,
    cartTotal,
  };
};
