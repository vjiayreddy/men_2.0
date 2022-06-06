import { ROUTES } from "./../../../src/config/routes/routes";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import jwt_decode from "jwt-decode";
import { userLogin } from "../../../src/config/apollo/actions/useLogin";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { data, error }: any = await userLogin({
          email: credentials["email"],
          password: credentials["password"],
        });
        console.log(data);
        if (!data && error) {
          throw new Error(error);
        }
        return {
          name: data.login.token,
        };
      },
    }),
  ],
  events: {
    // async signIn(message) {},
    // async signOut(message) {},
    async session(message) {},
  },
  pages: {
    signIn: ROUTES.LOGIN,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    },
    session: async ({ session }) => {
      const token = session.user.name;
      const user = jwt_decode(token);
      session.user = user;
      session.user["token"] = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
