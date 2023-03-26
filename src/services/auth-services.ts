import { UserRegisterDataType, UserDataType } from "@src/types/user-types";
import axios from "axios";

export const register = async (
  userRegisterData: UserRegisterDataType
): Promise<
  { data: UserDataType; status: number } | { data: string; status: number }
> => {
  try {
    const res = await axios.post<UserDataType>(
      "/api/auth/register",
      userRegisterData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (error) {
    return (error as { response: { data: string; status: number } }).response;
  }
};
