import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { UserDataType } from "@src/types/user-types";

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
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      picture: user.picture,
      role: user.role,
    });
  }
}
