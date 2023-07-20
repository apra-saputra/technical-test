import { hashPassword, isValidPassword } from "../helpers/bcrypt.js";
import prisma from "../init/prisma.js";

type UserRequest = {
  email: string;
  name: string;
  password: string;
};

class UserService {
  static async create(data: UserRequest) {
    try {
      if (data.password && data.password.length < 5) {
        throw { message: "Password min 5 char", name: "BAD_REQUEST" };
      }

      const hashedPassword = hashPassword(data.password);

      return await prisma.user.create({
        data: { ...data, password: hashedPassword },
        select: { ID: true, name: true, email: true },
      });
    } catch (error) {
      await prisma.$disconnect();
      throw error;
    }
  }

  static async findById(ID: number) {
    try {
      return await prisma.user.findFirst({
        where: { ID },
        select: { ID: true, name: true, email: true },
      });
    } catch (error) {
      await prisma.$disconnect();
      throw error;
    }
  }

  static async login(email: string, password: string) {
    try {
      return await prisma.user.findFirst({
        where: { email },
      });
    } catch (error) {
      await prisma.$disconnect();
      throw error;
    }
  }
}

export default UserService;
