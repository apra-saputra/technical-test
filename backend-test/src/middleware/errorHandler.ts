import { NextFunction, Request, Response } from "express";
import { customResponse } from "../helpers/response.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // for logging
  console.error("ERROR.NAME :", err.name, "ERROR :", err);

  let code: number, message: string;

  switch (err.name) {
    case "INVALID_LOGIN":
      code = 400;
      message = err.message;
      break;
    case "BAD_REQUEST":
      code = 400;
      message = err.message;
      break;
    case "INVALID_TOKEN":
      code = 401;
      message = err.message;
      break;
    case "NOT_FOUND":
      code = 404;
      message = err.message;
      break;
    default:
      (code = 500), (message = "internal server error");
      break;
  }

  customResponse(res, code, "ERROR", message);
};
