import { TCreateUser } from "@modules/accounts/types/TCreateUser";
import { UserEntity } from "../entities/UserEntity";
import { prisma } from "../../../../database/PrismaClient"

class UsersRepository {
    async createUser({ name, email, password }: TCreateUser): Promise<UserEntity> {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return newUser;
    }
}

export { UsersRepository };