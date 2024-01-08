// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { sendContactEmail } from "@src/utils/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { data } = req.body;
  if (!data) return res.status(400).json("Message data not exists!");
  try {
    await sendContactEmail(data.name, data.email, data.context,data.subject);
    return res.status(200).json("Your message sended successfully!");
  } catch (error) {
    return res.status(400).json("Message send failed!");
  }
}
