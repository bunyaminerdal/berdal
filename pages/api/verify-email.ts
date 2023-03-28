// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { token } = req.body;
  if (!token) return res.status(400).json("verify token not exists!");
  let error = null;
  let decodedToken: { email: string } | null = null;
  await jwt.verify(
    token,
    process.env.NEXTAUTH_SECRET ?? "no-secret",
    function (err: any, decoded: any) {
      if (err) error = err;
      decodedToken = decoded;
    }
  );
  if (error) return res.status(400).json("Token is invalid or corrupted!");

  if (!decodedToken)
    return res.status(400).json("Token is invalid or corrupted!");
  const exists = await prisma.user.findUnique({
    where: {
      email: (decodedToken as { email: string }).email,
    },
  });
  if (!exists) return res.status(400).json("Token is invalid or corrupted!");
  if (exists.emailVerified)
    return res.status(200).json("Email already Verified!");
  try {
    await prisma.user.update({
      where: {
        email: (decodedToken as { email: string }).email,
      },
      data: {
        emailVerified: new Date(),
      },
    });
    return res
      .status(200)
      .json("Email verified successfully, You can login now!");
  } catch (error) {
    return res.status(400).json("Token is invalid or corrupted!");
  }
}
