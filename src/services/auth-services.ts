import { UserRegisterDataType } from "@src/types/user-types";
import axios from "axios";
type RegisterResData = {
  message: string;
  email: string;
  name: string;
};
export const register = async (
  userRegisterData: UserRegisterDataType
): Promise<
  { data: RegisterResData; status: number } | { data: string; status: number }
> => {
  try {
    const res = await axios.post<RegisterResData>(
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
