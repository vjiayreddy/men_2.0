import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { QUERY_STATUS } from "../../../utils/enums";
export interface NewUserRegistrationFields {
  email: number;
  password: string;
  fullName: string;
}

interface RegisterUser {
  _id: string;
}

export const GQL_USER_REGISTRATION = gql`
  mutation userRegistration($user: RegisterUserInput!) {
    registerUser(user: $user) {
      _id
    }
  }
`;

export const useRegistration = () => {
  const [signupStatus, setSignupStatus] = useState<string | null>();
  const [userRegistration, { error, data, loading }] = useMutation<
    { registerUser: RegisterUser },
    { user: NewUserRegistrationFields }
  >(GQL_USER_REGISTRATION, {
    onCompleted() {
      setSignupStatus(QUERY_STATUS.SUCCESS);
    },
    onError() {
      setSignupStatus(QUERY_STATUS.ERROR);
    },
  });
  const register = async (payload: NewUserRegistrationFields) => {
    await userRegistration({
      variables: {
        user: {
          email: payload.email,
          fullName: payload.fullName,
          password: payload.password,
        },
      },
    });
  };

  return {
    register,
    loading,
    signupStatus,
  };
};
