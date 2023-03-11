import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email?: string;
      fullName?: string;
      access_token?: string;
      role?: string;
      id?: string;
    };
    accessToken?: string;
    refreshToken?: string;
  }
  interface User {
    session: any;
    user: any;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    jti?: string;
    access_token?: string;
    refresh_token?: string;
    user?: {
      email?: string;
      fullName?: string;
      role?: string;
      id?: string;
    };
  }
}
