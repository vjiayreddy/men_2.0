import { USE_GET_CARTITEM_BY_USERID } from "./useGetCartByUserId";
import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";

export const UPDATE_ITEM_QUANTITY = gql`
  mutation updateProductQuantityInUserCart(
    $productId: String!
    $quantity: Int!
    $userId: String!
  ) {
    updateProductQuantityInUserCart(
      productId: $productId
      quantity: $quantity
      userId: $userId
    ) {
      _id
    }
  }
`;

export const useUpdateItemQuantity = () => {
  const { data: session } = useSession();
  const [updateProductQuantityInUserCart, { loading: UPQUCLoading }] =
    useMutation<
      { updateProductQuantityInUserCart: { _id: string } },
      {
        productId: string;
        quantity: number;
        userId: string;
      }
    >(UPDATE_ITEM_QUANTITY, {
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

  const gqlUpdateUserCartQuantity = async (
    productId: string,
    quantity: number
  ) => {
    const response = await updateProductQuantityInUserCart({
      variables: {
        productId: productId,
        userId: session?.user["_id"],
        quantity: quantity,
      },
    });

    return new Promise((resolve, reject) => {
      if (response.data) {
        resolve(response.data);
      } else {
        reject(response.errors);
      }
    });
  };

  return {
    gqlUpdateUserCartQuantity,
    UPQUCLoading,
  };
};
