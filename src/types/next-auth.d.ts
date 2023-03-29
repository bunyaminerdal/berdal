import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";
import { UserRoleMap } from "./user-types";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRoleMap[];
    } & DefaultSession["user"];
  }
  interface User extends DefaultSession["user"] {
    id: string;
    role: UserRoleMap[];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: UserRoleMap[];
  }
}
