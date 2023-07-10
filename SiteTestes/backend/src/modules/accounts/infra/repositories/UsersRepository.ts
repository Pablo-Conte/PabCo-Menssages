import { TCreateUser } from "@modules/accounts/types/TCreateUser";
import { UserEntity } from "../entities/UserEntity";
import { prisma } from "../../../../database/PrismaClient";
import { TFindUserByEmail } from "@modules/accounts/types/TFindUserByEmail";

class UsersRepository {
  async createUser({
    name,
    email,
    password,
  }: TCreateUser): Promise<UserEntity> {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return newUser;
  }

  async findUserByEmail({ email }: TFindUserByEmail): Promise<UserEntity> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}

export { UsersRepository };
