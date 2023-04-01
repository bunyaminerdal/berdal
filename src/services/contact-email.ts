import { ContactFormInputs } from "@components/contactPage/ContactForm";
import axios from "axios";

export const contactEmail = async (
  data: ContactFormInputs
): Promise<{ data: string; status: number }> => {
  try {
    const res = await axios.post<string>(
      "/api/contact-email",
      { data },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res;
  } catch (error) {
    return (error as { response: { data: string; status: number } }).response;
  }
};
