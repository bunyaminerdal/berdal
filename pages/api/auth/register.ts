import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { render } from "@react-email/render";
import VerifyEmail from "@src/utils/VerifyEmail";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@src/utils/mail";
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

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.NEXTAUTH_SECRET ?? "no-secret"
    );

    try {
      await sendVerificationEmail(
        user.email,
        token,
      );
      return res.status(200).json({
        message: "Verification Email Sended",
        email: user.email,
        name: user.name,
      });
    } catch (error) {
      return res.status(400).json("Email send failed!");
    }
  }
}
