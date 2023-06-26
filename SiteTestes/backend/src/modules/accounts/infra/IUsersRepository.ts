import { TCreateUser } from "../types/TCreateUser";
import { UserEntity } from "./entities/UserEntity";

interface IUsersRepository {
  createUser({ name, email, password }: TCreateUser): Promise<UserEntity>;
}

export { IUsersRepository };
