import { UserRegisterDataType } from "@src/types/user-types";
import axios from "axios";

export const verifyEmailWithToken = async (
  token: string
): Promise<{ data: string; status: number }> => {
  try {
    const res = await axios.post<string>(
      "/api/verify-email",
      { token },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (error) {
    return (error as { response: { data: string; status: number } }).response;
  }
};
