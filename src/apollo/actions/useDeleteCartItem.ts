import { USE_GET_CARTITEM_BY_USERID } from "./useGetCartByUserId";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";

import _ from "lodash";

export const DELETE_CARTITEM_BY_ID = gql`
  mutation removeItemsFromUserCart($productId: String!, $userId: String!) {
    removeItemsFromUserCart(productId: $productId, userId: $userId) {
      _id
    }
  }
`;

export const useDeleteCartItem = () => {
  const { data: session } = useSession();
  const [removeItemsFromUserCart, { loading: RIFUCLoading }] = useMutation<
    { removeItemsFromUserCart: { _id } },
    { productId: string; userId: string }
  >(DELETE_CARTITEM_BY_ID, {
    fetchPolicy: "network-only",
    refetchQueries: [
      {
        query: USE_GET_CARTITEM_BY_USERID,
        variables: {
          userId: session?.user["_id"],
        },
      },
    ],
  });
  const gqlRemoveItemsFromCart = async (productId: string) => {
    const response = await removeItemsFromUserCart({
      variables: {
        productId: productId,
        userId: session?.user["_id"],
      },
    });
    return new Promise((resolve, reject) => {
      if (!_.isEmpty(response.data)) {
        resolve(response.data);
      } else {
        reject(response.errors);
      }
    });
  };

  return {
    gqlRemoveItemsFromCart,
    RIFUCLoading,
  };
};
