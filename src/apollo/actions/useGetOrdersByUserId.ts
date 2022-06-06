import { useState, useEffect } from "react";
import { AUTH_STATE } from "./../../utils/enums";
import { gql, useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

import _ from "lodash";

export const GET_ORDERS_BY_USER_ID = gql`
  query getProductOrdersByUserId($userId: String!) {
    getProductOrdersByUserId(userId: $userId) {
      _id
      address {
        _id
        address1
        address2
        city
        country
        countryCode
        email
        firstName
        phone
        postalCode
        lastName
        landmark
        state
        userId
      }

      discTotal
      email
      firstName
      isCaptured
      isCompleted
      isPaid
      isPaymentFailed
      isReady
      items {
        catId
        discount
        discountType
        images
        name
        price
        productId
        productSerialId
        quantity
        title
        totalItemDiscountedPrice
        totalItemPrice
      }
      lastName
      note
      orderDateTime {
        datestamp
        day
        hour
        minute
        month
        timestamp
        year
      }
      orderId
      orderTotal
      paidDateTime {
        datestamp
        day
        hour
        minute
        timestamp
        year
        month
      }
      phone
      prefix
      readyDateTime {
        datestamp
        day
        hour
        minute
        month
        timestamp
        year
      }
      status {
        label
        name
        note
        userId
      }
    }
  }
`;

export const useGetOrdersByUserId = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<any>(null);
  const [
    getProductOrdersByUserId,
    { data: POBUData, loading: POBUDLoading, error },
  ] = useLazyQuery<{ getProductOrdersByUserId: any[] }, { userId: string }>(
    GET_ORDERS_BY_USER_ID
  );
  const gqlGetProductOrders = async () => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      getProductOrdersByUserId({
        variables: {
          userId: session?.user["_id"],
        },
      });
      return new Promise((resolve, reject) => {
        if (!_.isEmpty(POBUData)) {
          resolve(POBUData);
        }
        if (error) {
          reject(error);
        }
      });
    }
  };

  useEffect(() => {
    if (!_.isEmpty(POBUData)) {
      const { getProductOrdersByUserId } = POBUData;
      if (getProductOrdersByUserId) {
        setOrders(getProductOrdersByUserId);
      }
    }
  }, [POBUData]);

  return {
    gqlGetProductOrders,
    POBUDLoading,
    orders,
  };
};
