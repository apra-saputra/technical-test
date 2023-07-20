import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TokenPayloadType, verifyToken } from "../helpers/jwt.js";
import Validator from "../helpers/validator.js";

const prisma = new PrismaClient();
const { validateToken } = Validator;

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accesstoken = req.cookies.accesstoken;

    validateToken(accesstoken);

    const payload: TokenPayloadType = verifyToken(accesstoken);

    validateToken(payload);

    const user = await prisma.user.findUnique({ where: { ID: payload.id } });

    if (!user) throw { name: "INVALID_TOKEN", message: "access denied" };

    req.user = { id: user.ID, email: user.email };

    next();
  } catch (error) {
    next(error);
  }
};
