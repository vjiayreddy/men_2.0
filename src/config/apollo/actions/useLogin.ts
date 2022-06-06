import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../../apollo";

type userParms = {
  email: string;
  password: string;
};

export const GQL_USER_LOGIN = gql`
  query userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        addresses {
          address1
          address2
          city
          country
          countryCode
          email
          firstName
          landmark
          lastName
          phone
          postalCode
          state
          userId
          _id
        }
      }
    }
  }
`;

export const userLogin = async (parms: userParms) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query({
    query: GQL_USER_LOGIN,
    variables: {
      email: parms.email,
      password: parms.password,
    } as userParms,
  });

  return response;
};
