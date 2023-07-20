import { NextFunction, Request, Response } from "express";
import UserService from "../service/userService.js";
import { customResponse } from "../helpers/response.js";
import { isValidPassword } from "../helpers/bcrypt.js";
import Validator from "../helpers/validator.js";
import { signToken } from "../helpers/jwt.js";

const { validateToken, validateInput } = Validator;

class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password }: RegisterType = req.body;

      validateInput("Email", email);
      validateInput("Name", name);
      validateInput("Password", password);

      const user = await UserService.create({
        email,
        name,
        password,
      });

      if (!user) {
        throw { name: "ISE" };
      }

      const payload: ResponseUser = {
        email: user.email,
        name: user.name,
      };

      customResponse(res, 201, "Success Register", payload);
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password }: LoginType = req.body;

      validateInput("Email", email);
      validateInput("Password", password);

      const user = await UserService.login(email, password);

      if (!user) {
        throw { name: "INVALID_LOGIN", message: "invalid email/password" };
      }

      if (!isValidPassword(password, user.password)) {
        throw { name: "INVALID_LOGIN", message: "invalid email/password" };
      }

      const accessToken = signToken({ id: user.ID, email: user.email });

      res.cookie("accesstoken", accessToken, {
        maxAge: 60 * 60 * 1000,
        httpOnly: process.env.NODE !== "production" ? false : true,
      });

      const message: string = `name: ${user.name} Login`;

      customResponse(res, 200, "Success Login", message);
    } catch (error) {
      next(error);
    }
  }

  static async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userid = req.user?.id as number;

      validateToken(userid);

      const user = await UserService.findById(userid);

      if (!user) throw { name: "NOT_FOUND", message: "data not found" };

      const payload: ResponseUser = {
        email: user.email,
        name: user.name,
      };

      customResponse(res, 200, "Success Get User", payload);
    } catch (error) {
      next(error);
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const userid = req.user?.id as number;
      const email = req.user?.email;

      validateToken(userid);

      const user = await UserService.findById(userid);

      if (!user) throw { name: "NOT_FOUND", message: "data not found" };

      res.clearCookie("accesstoken");

      const message: string = `email: ${email} Logout`;

      customResponse(res, 200, "Success Logout", message);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
