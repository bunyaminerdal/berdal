import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { render } from "@react-email/render";
import Email from "@src/utils/Email";
var nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, role, name } = req.body;
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    res.status(400).send("User already exists");
  } else {
    const user = await prisma.user.create({
      data: {
        email,
        role,
        name,
        password: await hash(password, 10),
      },
    });
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
      Email({ url: "https://bunyaminerdal.com.tr", name: user.name })
    );

    const options = {
      from: "register@bunyaminerdal.com.tr",
      to: user.email,
      subject: "bunyaminerdal.com.tr email verification",
      html: emailHtml,
    };

    const sendedEmailRes = await transporter.sendMail(options);
    if (sendedEmailRes.accepted.find((acc: string) => acc === email))
      return res.status(200).json({
        message: "Verification Email Sended",
        email: user.email,
        name: user.name,
      });
    else return res.status(400).json("Email send failed!");
  }
}
