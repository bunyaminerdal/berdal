import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import { Prisma } from "@prisma/client";
import { Session } from "inspector";
import { randomBytes, randomUUID } from "crypto";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        // Add logic here to look up the user from the credentials supplied
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const account = await prisma.account.findFirst({
            where: {
              userId: user.id as string,
              provider: "credentials",
            },
          });
          if (!account) throw new Error("user not found");
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("user not found");
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
    async session({ session, token }) {
      console.log("🚀 ~ file: [...nextauth].ts:74 ~ session ~ token", token);
      session.accessToken = token.jti;
      console.log(
        "🚀 ~ file: [...nextauth].ts:75 ~ session ~ session",
        session
      );
      return session;
    },
  },
});
