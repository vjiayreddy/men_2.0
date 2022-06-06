import { AUTH_STATE } from "./../../utils/enums";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import _ from "lodash";

export type orderPayload = {
  addressId: string;
  currency: string;
  description: string;
  paymentMethodId: string;
  userId?: string;
};

interface OrderResponse {
  orderId: string;
  orderNo: string;
  paymentIntent: string;
  prefix: string;
}

export const CREATE_PRODUCT_ORDER = gql`
  mutation createProductOrder($order: ProductOrderInput!) {
    createProductOrder(order: $order) {
      orderId
      orderNo
      paymentIntent
      prefix
    }
  }
`;

export const useCreateProductOrder = () => {
  const { data: session, status } = useSession();
  const [createProductOrder, { loading: CPRLoading }] =
    useMutation<
      {
        createProductOrder: OrderResponse;
      },
      {
        order: orderPayload;
      }
    >(CREATE_PRODUCT_ORDER);

  const gqlCreateProductOrder = async (payload: orderPayload) => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      const response = await createProductOrder({
        variables: {
          order: {
            ...payload,
            userId: session?.user["_id"],
          },
        },
      });
      return new Promise((resolve, reject) => {
        if (!_.isEmpty(response.data)) {
          resolve(response.data);
        } else {
          reject(response.errors);
        }
      });
    }
  };

  return {
    gqlCreateProductOrder,
    CPRLoading,
  };
};
