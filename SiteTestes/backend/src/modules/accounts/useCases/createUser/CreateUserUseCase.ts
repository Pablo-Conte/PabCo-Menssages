import { inject, injectable } from "tsyringe";
import { DTOCreateUser } from "@modules/accounts/dtos/DTOCreateUser";
import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";
import { UserEntity } from "@modules/accounts/infra/entities/UserEntity";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password }: DTOCreateUser): Promise<UserEntity> {
    const passwordHash = await hash(password, 10);

    const newUser = await this.usersRepository.createUser({
      name,
      email,
      password: passwordHash,
    });

    return newUser;
  }
}

export { CreateUserUseCase };
