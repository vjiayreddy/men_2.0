import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import _ from "lodash";

export interface SaveAddressPayload {
  city: string;
  country: string;
  countryCode: string;
  email: string;
  firstName: string;
  lastName: string;
  isDefault?: boolean;
  state: string;
  phone: string;
  landmark: string;
  userId: string;
  address1: string;
  address2: string;
  postalCode: string;
  type?: string;
}
export interface UserAddressType extends SaveAddressPayload {
  _id?: string;
}

export const SAVE_ADDRESS = gql`
  mutation createUserAddress($address: UserAddressInput!) {
    createUserAddress(address: $address) {
      _id
    }
  }
`;

export const useSaveAddress = () => {
  const { data: session, status } = useSession();
  const [
    createUserAddress,
    { data: SUAData, loading: SUALoading, error: SUAError },
  ] = useMutation<
    {
      createUserAddress: UserAddressType;
    },
    {
      address: SaveAddressPayload;
    }
  >(SAVE_ADDRESS, {
    fetchPolicy: "network-only",
    onCompleted: onCompleted,
    onError: onError,
  });

  function onError(error: any) {
    alert("Something went wrong please try again...");
  }
  function onCompleted(data: any) {}

  const saveUserAddress = async (payload: SaveAddressPayload) => {
    const response = await createUserAddress({
      variables: {
        address: {
          ...payload,
          userId: session?.user["_id"],
          countryCode: "00",
          country: "US",
        },
      },
    });
    return new Promise((resolve, reject) => {
      if (!_.isEmpty(response.data)) {
        resolve(response.data);
      } else {
        reject(response?.errors);
      }
    });
  };

  return { saveUserAddress, SUALoading, SUAError };
};
