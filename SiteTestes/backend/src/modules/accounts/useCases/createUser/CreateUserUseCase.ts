
import { inject, injectable } from "tsyringe";
import { DTOCreateUser } from "@modules/accounts/dtos/DTOCreateUser";
import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";
import { UserEntity } from "@modules/accounts/infra/entities/UserEntity";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ name, email, password }: DTOCreateUser): Promise<UserEntity> {
    
    const newUser = await this.usersRepository.createUser({
        name,
        email,
        password
    });

    return newUser;
  }
}

export { CreateUserUseCase };
