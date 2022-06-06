import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import _ from "lodash";

type productType = {
  images: string[];
  name: string;
  price: number;
};

type lookProductType = {
  product: productType;
  productId: string;
};

type lookType = {
  _id: string;
  images: string[];
  items: lookProductType[];
  name: string;
  price: number;
  subTitle: string;
  title: string;
};

export interface GetRecommendedLooksPayload {
  lookId: string;
  lookData: lookType;
}

export const GET_USER_RECOMMENDED_LOOKS = gql`
  query getUserRecommendedLooks($userId: String) {
    getRecommendedLooks(userId: $userId) {
      lookData {
        _id
        images
        items {
          productId
          product {
            price
            name
            images
          }
        }
        name
        price
        sortOrder
        subTitle
        title
      }
      lookId
    }
  }
`;

export const useGetRecommendedLooks = () => {
  const { data: session } = useSession();
  const [looks, setLooks] = useState<any[]>([]);
  const [
    getUserRecommendedLooks,
    { data: GURLData, error: GURLError, loading: GURLLoading },
  ] = useLazyQuery<{ getRecommendedLooks: GetRecommendedLooksPayload[] }>(
    GET_USER_RECOMMENDED_LOOKS,
    {
      fetchPolicy: "network-only",
    }
  );

  const getRecommendedLooks = async () => {
    await getUserRecommendedLooks({
      variables: {
        userId: session?.user["_id"],
      },
    });
  };

  const filterLooksItems = (item: lookProductType[]) => {
    return item.map((item) => {
      return {
        itemId: item.productId,
        itemName: item.product.name,
        itemPrice: item.product.price,
        itemImage: item.product.images,
      };
    });
  };

  useEffect(() => {
    if (GURLData) {
      let looksData = [];
      const { getRecommendedLooks } = GURLData;
      if (getRecommendedLooks) {
        getRecommendedLooks.map((item, index) => {
          if (!_.isEmpty(item.lookData.items)) {
            looksData.push({
              lookImage: item.lookData.images[0],
              look_id: item.lookData._id,
              lookPrice: item.lookData.price,
              image: item.lookData.images[0],
              lookItems: filterLooksItems(item.lookData.items),
              lookName: item.lookData.name,
              itemId: item.lookData._id,
              lookId: item.lookId,
            });
          }
        });
      }
      setLooks(looksData);
    }
  }, [GURLData]);


  return {
    getRecommendedLooks,
    looks,
    GURLLoading,
    GURLError,
  };
};
