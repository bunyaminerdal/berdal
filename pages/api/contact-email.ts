// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import ContactEmail from "@src/utils/ContactEmail";
var nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { data } = req.body;
  if (!data) return res.status(400).json("Message data not exists!");
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "",
    port: process.env.EMAIL_PORT || "",
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASS || "",
    },
  });
  const emailHtml = render(
    ContactEmail({
      name: data.name,
      email: data.email,
      context: data.context,
    })
  );

  const options = {
    from: "no-reply@bunyaminerdal.com.tr",
    to: process.env.CONTACT_EMAIL,
    subject: data.subject,
    html: emailHtml,
  };
  try {
    await transporter.sendMail(options);
    return res.status(200).json("Your message sended successfully!");
  } catch (error) {
    return res.status(400).json("Message send failed!");
  }
}
