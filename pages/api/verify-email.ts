// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import Email from "@src/utils/Email";
var nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { email, name } = req.body;
  if (!email || !name)
    return res.status(401).json("email and name is required to send email!");
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASS || "",
    },
  });
  //TODO: add token to url
  const emailHtml = render(
    Email({ url: "https://bunyaminerdal.com.tr", name })
  );

  const options = {
    from: "register@bunyaminerdal.com.tr",
    to: email,
    subject: "bunyaminerdal.com.tr email verification",
    html: emailHtml,
  };

  const sendedEmailRes = await transporter.sendMail(options);
  if (sendedEmailRes.accepted.find((acc: string) => acc === email))
    return res.status(200).json("Verification Email Sended");
  else return res.status(401).json("Email send failed!");
}
