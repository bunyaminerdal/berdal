import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import { randomBytes, randomUUID } from "crypto";
import { createClient } from "@supabase/supabase-js";
import { JWT } from "next-auth/jwt";

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
      async authorize(credentials, req): Promise<any> {
        const supabase = await createClient(
          process.env.SUPABASE_URL ?? "",
          process.env.SUPABASE_ANON ?? "",
          {
            auth: {
              autoRefreshToken: false,
              persistSession: false,
              detectSessionInUrl: false,
            },
          }
        );
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        });

        // Add logic here to look up the user from the credentials supplied
        if (data) {
          return data;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("user not found");
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        const userrr = {
          id: user?.user.id ?? "",
          email: user?.user.email ?? "",
          role: user?.user.role ?? "",
          fullName: user?.user.user_metadata.fullName ?? "",
        };
        token.user = userrr;
        token.email = user.user.email;
        token.access_token = user.session.access_token;
        token.refresh_token = user.session.refresh_token;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      if (token) {
        session.accessToken = token.access_token;
        session.refreshToken = token.refresh_token;
        if (token.user) {
          session.user = token.user;
        }
      }
      return session;
    },
  },
});
