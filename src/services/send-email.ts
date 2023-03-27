import { UserRegisterDataType, UserDataType } from "@src/types/user-types";
import axios from "axios";

export const sendConfirmationEmail = async (userData: {
  email: string;
  name: string;
}): Promise<{ data: string; status: number }> => {
  try {
    const res = await axios.post<string>("/api/verify-email", userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error) {
    return (error as { response: { data: string; status: number } }).response;
  }
};

// <Button
//   variant="contained"
//   type="button"
//   onClick={() => {
//     sendConfirmationEmail({
//       email: "leonidas131@hotmail.com",
//       name: "ali baba",
//     });
//   }}
// >
//   Send
// </Button>;
