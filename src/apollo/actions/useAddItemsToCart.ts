import { USE_GET_CARTITEM_BY_USERID } from "./useGetCartByUserId";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { productType } from "../../containers/cart/cartItem";

export interface cartItemType {
  discount: number;
  discountType: string;
  lookId: string;
  lookName: string;
  product:productType,
  price: number;
  productId: string;
  quantity: number;
}

export interface CartItemPayload {
  couponCode: string;
  items: cartItemType[];
  userId: string;
}

export const ADD_ITEMS_TO_CART = gql`
  mutation addItemsToUserCart($cart: UserCartInput!) {
    addItemsToUserCart(cart: $cart) {
      _id
    }
  }
`;

export const useAddItemsToCart = () => {
  const { data: session } = useSession();
  const [addItemsToUserCart, { loading: AITCLoading, error: AITCError }] =
    useMutation<
      { addItemsToUserCart: { _id: string } },
      { cart: CartItemPayload }
    >(ADD_ITEMS_TO_CART, {
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

  const addCartItems = async (payload: any) => {
    const response = await addItemsToUserCart({
      variables: {
        cart: getCartPayload(payload),
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

  const getCartPayload = (data: any): CartItemPayload => {
    let cartItems: cartItemType[] = data.lookItems.map((item) => {
      return {
        discount: 0,
        discountType: null,
        lookId: data.lookId,
        lookName: data.lookName,
        price: item.itemPrice,
        productId: item.itemId,
        quantity: 1,
      };
    });
    return {
      couponCode: null,
      items: cartItems,
      userId: session?.user["_id"],
    };
  };

  return {
    addCartItems,
    getCartPayload,
    AITCLoading,
    AITCError,
  };
};
