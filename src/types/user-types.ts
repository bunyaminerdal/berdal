export enum UserRoleMap {
  "OWNER" = "OWNER",
  "SUPER_USER" = "SUPER_USER",
  "ADMIN" = "ADMIN",
  "USER" = "USER",
  "GUEST" = "GUEST",
}

export type UserRegisterDataType = {
  email: string;
  name: string;
  phone?: string;
  picture?: string;
  role?: UserRoleMap[];
  password: String;
};
export type UserRegisterReturnType = Omit<UserRegisterDataType, "password"> & {
  id: string;
};
