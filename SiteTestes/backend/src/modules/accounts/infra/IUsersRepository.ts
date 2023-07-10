import { TCreateUser } from "../types/TCreateUser";
import { TFindUserByEmail } from "../types/TFindUserByEmail";
import { UserEntity } from "./entities/UserEntity";

interface IUsersRepository {
  createUser({ name, email, password }: TCreateUser): Promise<UserEntity>;
  findUserByEmail({ email }: TFindUserByEmail): Promise<UserEntity>;
}

export { IUsersRepository };
