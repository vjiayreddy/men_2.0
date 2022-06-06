import { AUTH_STATE } from "./../../utils/enums";
import { USE_GET_CARTITEM_BY_USERID } from "./useGetCartByUserId";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import _ from "lodash";

export const CLEAR_USER_CART = gql`
  mutation clearUserCart($userId: String!) {
    clearUserCart(userId: $userId) {
      _id
    }
  }
`;

export const useClearUserCartItems = () => {
  const { data: session, status } = useSession();
  const [clearUserCart] = useMutation<
    { clearUserCart: { _id: string } },
    { userId: string }
  >(CLEAR_USER_CART, {
    refetchQueries: [
      {
        query: USE_GET_CARTITEM_BY_USERID,
        variables: {
          userId: session?.user["_id"],
        },
      },
    ],
  });

  const gqlClearUserCartItems = async () => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      const response = await clearUserCart({
        variables: {
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
    }
  };

  return {
    gqlClearUserCartItems,
  };
};
